import { GetStaticProps, GetStaticPaths } from "next";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import path from "path";
import { ParsedUrlQuery } from "querystring";

interface PostData {
  title: string;
  date: string;
  content: string;
}

interface PostProps {
  post: PostData;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function Post({ post }: PostProps) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps, Params> = async ({
  params,
}) => {
  const filePath = path.join(process.cwd(), "posts", `${params?.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const postContent = processedContent.toString();

  return {
    props: {
      post: {
        title: data.title,
        date: data.date,
        content: postContent,
      },
    },
  };
};

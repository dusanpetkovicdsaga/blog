---
layout: post
title: Making network requests in React with useEffect, the correct way.
categories: [react, hooks, en]
draft: true
---

What could be the consequences of using the useEffect hook incorrectly? Your whole React app could explode, that's what!!

Just kidding, but here are some reasons that can make it worthwhile to consider some of the better approaches and uses of the hook when making network requests.

<!--more-->

### Potential issues that can happen

- Inconsistent state or updates when they are not intended.
- Infinite loops.
- Generating multiple network requests for a resource we only need to fetch once.
- Code that is hard to maintain.

### The why

Why do these types of issues even arise? Did the React team do something wrong here, or are the developers not able to understand how to properly use the useEffect hook?

From my perspective, I was always just using the useEffect hook the same way I would use the componentDidMount or componentDidUpdate lifecycle hooks back when class components were still a thing, just in a bit decoupled way, because with hooks, we can add as many effects as we need and separate our effects based on what they do or which state they need to update. The main problem with the way of using it I described is that useEffect is not a lifecycle hook and it's not intended to be used as one.

A good basis for grasping what the useEffect hook is intended for is to just read the statement from the (https://react.dev/reference/react/useEffect)[official docs], which gives you a very good starting point in understanding how to use it:

- "useEffect is a React Hook that lets you synchronize a component with an external system."

### Making post requests with useEffect

The above code is doing the opposite of what we need to do. It's synchronizing an external system with a React state, which can cause some issues if the reference for the submit payload changes somehow. It's best not to have something in between the actual action we need to perform and the user event that causes it, which in this case is form submit. So, it would be better if it was just an event handler that is tied to the event.

Lets fix it by adding an eventHandler

```typescript

function SignupForm({ roomId }) {
    
  const handleSubmitForm = (formPayload: Payload) => {
      fetch('https://backend/api',{
            method: "post",
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },

                body: JSON.stringify(formPayload)
         })
         .then(() => {
            console.log('Success')
         })
         .catch(() => {
            console.error('Error');
         })
  }

  return (<form onSubmit={handleSubmitForm}>
        form fields here
  </form>)
}

```

In the above case, we eliminated the need for a useEffect entirely, which is good. The less we have of them, the easier and more maintainable our code will be.


### Fetching data for initial state of a component

This is a legitimate reason to use a useEffect hook, as we are basically doing what it's intended for. However, some common pitfalls can occur when we do it manually, such as making multiple requests when we only need one.

Let's say that we have an App component that needs to initially load some configuration data, such as categories for posts in the database. We only need to load this once, as these categories don't change often. A common way to implement this is:

```typescript
import { useState, useEffect } from 'react';
import { fetchCategories } from './api';

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetchCategories().then(result => {
        setCategories(result);
    });
 
  }, []);

  // ...

```

Looking at the above code, it's not too problematic, but one of the issues we might have is if our App component for some reason mounts and unmounts a few times, we would be making an additional network request unnecessarily. There are a few ways we could handle this and optimize it: 
- Implement caching so that any subsequent requests just load from cache, or we can also use a library like ReactQuery for this. 
- Move the request out of the component entirely and avoid a useEffect.
- Make the useEffect cancel the current request on unmount, which also prevents race condition problems. 

Here's an example of how to cancel the current request on unmount:

```typescript
import { useState, useEffect } from 'react';
import { fetchCategories } from './api';

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://backend/api/categories',{ signal }).then(result => {
        setCategories(result);
    });
 
    return () => {
      controller.abort();
    };
  }, []);

  // ...

```

### Leave it to libraries to do the heavy lifting

This approach is contradictory to the current article, but it's generally good advice as it does all of the things we need and some extra features like refetching out of the box. 

If we implement a popular library for making network requests like React Query, we could fetch categories in the following way:

```typescript
import { useQuery } from 'react-query';
import { fetchCategories } from './api';

export default function App() {
  // we define a custom key for the query, reusing this same key would make subsuquent request load from cache
  const { data: categories, isLoading, error } = useQuery('categories', fetchCategories);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  // Use your categories data here
  // ...

}
```

As you can see from the above example, our code is much more concise and easier to read, and we get error and loading states for free. You can read more about using React Query on [the official website](https://tanstack.com/query/v4/docs/react/reference/useQuery).

I hope that it was useful to demonstrate some common usages of useEffect and other ways to make network requests in React. Feel free to share if you found the article useful! 


#### References
- (https://react.dev/reference/react/useEffect)[useEffect, React Docs]
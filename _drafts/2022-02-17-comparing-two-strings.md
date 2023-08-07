---
layout: post
title: Comparing 2 Strings in JS, How would I do it?
categories: [javascript]
---

I watched this interesting video on youtube, about a codding assignement where you need to solve a logical problem in JS, and write a function that does some processing based on input data and needs to return the expected result, as it turns out this if very interesting for me to try and solve on my own, so in this post I'll show my approach at this. 

<!--more-->

Comparing 2 Strings in JS, How would I do it?
I watched this interesting video on youtube, about a codding assignement where you need to solve a logical problem in JS, and write a function that does some processing based on input data and needs to return the expected result, as it turns out this if very interesting for me to try and solve on my own, so in this post I’ll show my approach at this.

## The Instructions
Create a function in JS that accepts 2 parameters, s1 and s2, which should be strings, and create some logic to create the longest common substring between them, while allowing any other characters as long as they don’t mess with the order of the longest common substring.
Example input and output:

```js
// “DUSANTEST1” “CCTESTGSAG” => “TEST”
// “AGGTAB” “GXTXAYB” => “GTAB”
```


## Try matching each letter
My first thought was that I should start by taking each letter in s1 and comparing it to all of the letters in s2.

```js
function getLongest(s1, s2) {
// * go through each of the letters in S1 and try to find the same in S2, but avoid characters already found, avoid finding items that preceed the already found
let found = [];
for (let i = 0; i < s1.length; i++) {
      // * find location in S2
      let s2Found = s2.indexOf(s1[i]);
      if (s2Found > -1) {
        found.push(s1[i]);
        s2 = s2.substr(s2Found + 1);
      }
    }
return found.join('');
};
console.log(found); // we print what was found
```

What I figured after I wrote my initial for loop, is that I don’t want to keep searching in the entire s2 string with every character in s1, as it would not help with duplicate matches and the order.

So if an s1 character is found in s2 we want to start counting our match from there and trim our s2 string so we don’t match the same character again.

## Another loop
So the example above now works, but it doesn’t return the longest common substring, it only returns the first found substring.

We need a way to collect all possible combinations and compare which one is the longest. And because our current example basically starts from the first matched letter from s1, we need a way to test all letter combinations in s1 left to right, omitting incrementally.

## Filtering out duplicates
Finding the longest

## The complete function

```js
function getLongest(s1, s2) {
  let collection = [];
  let longest = "";

  for (let w = 0; w < s1.length; w++) {
    let s1Search = s1.substr(w);

    let s2Processing = s2;

    let found = [];

    // * go through each of the letters in S1 and try to find the same in S2, but avoid characters already found, avoid finding items that preceed the already found
    for (let i = 0; i < s1Search.length; i++) {
      // * find location in S2
      let s2Found = s2Processing.indexOf(s1Search[i]);
      if (s2Found > -1) {
        found.push(s1Search[i]);
        s2Processing = s2Processing.substr(s2Found + 1);
      }
    }

    collection.push(found.join(""));
  }

  const uniqueValues = [...new Set(collection)];

  // go trough each of the items and count and write somewhere

  uniqueValues.forEach((value) => {
    if (longest.length <= value.length) {
      longest = value;
    }
  });

  // feches unique items
  return longest;
}

console.log(getLongest("aaaaabb", "aaa"));
```


The above solution might not be the most performant solution, but its the simplest I found.

Finding the solution above took me quite some time, more than I expected initially. Not too proud to say that I had to look up what the substr() function actually returns, so you can say that I cheated a little, it’s all because the online code editor that I used didn’t have any code hinting.

Any feedback is much appreciated.

# JavaScript Posts Template
A basic website that fetches posts using the placeholder api.

## The Poster object
- The poster object uses the Module Design pattern with an IIFE
- Use this to fetch information from the API
- The Poster object can also build templates we can insert into the DOM
- This can be extended to fetch the comments and create a template for the comment

```
// IIFE.
const Poster = (function(){

    // Private
    const postsEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    const commentsEndpoint = 'https://jsonplaceholder.typicode.com/comments';

    // Public
    return {
        // POSTS
        getPosts() {
            return fetch(postsEndpoint).then(resp => resp.json())
        },
        createPostTemplate(post) {
            const postDiv = document.createElement('div');
            const postTitle = document.createElement('h4');
            const postBody = document.createElement('p');
            const postLink = document.createElement('a');

            postTitle.innerText = post.title;
            postBody.innerText = post.body;
            postLink.innerText = 'View comments';
            postLink.href = `/comments.html?post=${post.id}`;

            postDiv.appendChild(postTitle);
            postDiv.appendChild(postBody);
            postDiv.appendChild(postLink);

            return postDiv;
        }
        // COMMENTS - Add your new code here.
    };

})();
```


## INSTRUCTIONS:
Extend it to redirect to a comments page.
Remember to add a query parameter "post" with the id of the post. (you will need it to filter the comments)
Create a comments.html file
Create a new script file 'comments.js' and do the call for new comments in there
Extend the Poster object to fetch the comments from the API (See the getPosts method for a reference)
Display a list of comments that match the post id you added to the link button (comments.html?post=1)
Make use of the filter() function to find comments for the post
You can style the comments as you wish, try to be creative, use google fonts have fun!

## OPTIONAL:
Add a searchbar on the posts page
Use the onchange event to filter the posts based on the value of the input
You will need to use some clever variable management to filter out the posts
I believe in you!

I have added the base solution we created in class. Let me know if you have questions.

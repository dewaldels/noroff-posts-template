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
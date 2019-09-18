async function getPosts() {

    // Cache a reference to the posts container in the DOM
    const elPosts = document.getElementById('posts');

    try {
        // Get a list of todos using our Poster object.
        const response = await Poster.getPosts();
        // Loop through the response array and create a new Post item in each iteration.
        response.forEach(post => {
            elPosts.appendChild(Poster.createPostTemplate(post));
        });

    }
    catch (e) {
        console.error(e);
    }
}

// Wait for the DOM to load before manipulating.
document.addEventListener('DOMContentLoaded', () => {
    getPosts();
})


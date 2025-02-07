function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
function displayPosts(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
           <h4>User-${post.userId}<h/4>
           <h5>post: ${post.title} </h5>
           <p>Post Description: ${post.body}</p>`;
        postContainer.appendChild(postDiv)
    }

}
loadPosts();
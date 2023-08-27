function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPosts(data));
}

function displayPosts(data) {
  const postContainer = document.getElementById("posts-container");

  data.forEach((post) => {
    const div = document.createElement("div");
    div.classList.add("post-div");
    div.innerHTML = `
    <h4 class="user-id">User: ${post.id}</h2>
    <h5 class="post-title">Title: ${post.title}</h5>
    <p class="post-body">${post.body}</p>`;
    postContainer.appendChild(div);
  });
}

loadPosts();

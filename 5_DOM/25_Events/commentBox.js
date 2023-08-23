const postButton = document.getElementById("btn-comment");

postButton.addEventListener("click", function () {
  const comment = document.getElementById("comment-box");

  const commentContainer = document.getElementById("comment-container");

  const commentElement = document.createElement("p");

  commentElement.innerText = comment.value;

  commentContainer.append(commentElement);

  comment.value = "";
});

const thisisPost = document.querySelector("#posts");
const loadMoreBtn = document.getElementById("loadSomePosts");

const loadSomePosts = () => {
  const POST_URL = `https://dummyjson.com/posts`;
  fetch(POST_URL)
    .then(res => res.json())
    .then((data) => {
      for (let post of data.posts) {
        thisisPost.innerHTML +=`
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        `;

      }
    })
}

loadMoreBtn.addEventListener('click', () => {
  loadSomePosts();
});

function attachEvents() {
    const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
    const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
    
    const loadPostButtonElement = document.getElementById("btnLoadPosts");
    const selectElement = document.getElementById("posts");
    const viewPostButtonElement = document.getElementById("btnViewPost");
    const postBodyElement = document.getElementById("post-body");
    const postTitleElement = document.getElementById("post-title");
    const postCommentElement = document.getElementById("post-comments");
    
    let allPosts = {};
    
    loadPostButtonElement.addEventListener("click", async() => {

        selectElement.innerHTML = "";
        postBodyElement.innerHTML = "";
        postCommentElement.innerHTML = "";


        const response = await fetch(postsUrl);
        allPosts = await response.json()    

        for (const [keyObject, postObject] of Object.entries(allPosts)) {
            const optionElement = document.createElement("option");
            optionElement.value = keyObject;
            optionElement.textContent = postObject.title
            selectElement.appendChild(optionElement);
        }
    })

    viewPostButtonElement.addEventListener("click", async() => {

        postCommentElement.innerHTML = "";

        const currentPostId = selectElement.value;
        postBodyElement.textContent = allPosts[currentPostId].body;
        postTitleElement.textContent = allPosts[currentPostId].title;

        const response = await fetch(commentsUrl);
        const comments = await response.json();

        const filteredComments = Object.values(comments).filter(comment => comment.postId === currentPostId);
        filteredComments.forEach(comment => {
            const liElement = document.createElement("li");
            liElement.textContent = comment.text;
            postCommentElement.appendChild(liElement)
        })
    })
}

attachEvents();
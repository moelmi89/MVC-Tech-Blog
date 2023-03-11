const updateFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
      const postContent = document.querySelector(".post-content").value.trim();
      const titletUpdate = document.querySelector(".post-title").value.trim();
  
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          post_title: titletUpdate,
          post_content: postContent,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
      }
    }
  };
  
  // this will delete a post
  const deletePost = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const postId = event.target.getAttribute("data-id");
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
        body: JSON.stringify({
          id: postId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.href = "/";
      } else {
      }
    }
  };
  
  document.querySelector("#delete-btn").addEventListener("click", deletePost);
  document.querySelector("#update-post").addEventListener("click", updateFormHandler);
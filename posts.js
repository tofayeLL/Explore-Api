
function loadPosts(){
    fetch ('https://jsonplaceholder.typicode.com/posts')
    .then (res => res.json())
    .then (data => displayPosts(data))
  
       
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
 for(const post of posts){
    console.log(post);
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `
    <h4> user:${post.id} </h4>
    <h5> post-title: ${post.title} </h5>
    <p> Description: ${post.body} </p>
    `
    postContainer.appendChild(div);
 }
    
}



loadPosts();
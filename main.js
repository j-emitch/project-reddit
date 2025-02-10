function randomNumber () {
  return Math.floor(Math.random()*90000) + 10000;
}


function createPost () {
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  //To remove post:
  //1. create an id for each post, assign id to each post
  //2. create an event listener for removeLink
  //3. create a function that removes post
  var newPostDiv = document.createElement('div');
    var randomID = randomNumber();
    newPostDiv.id = randomID;

  var newPostTextP = document.createElement('p');

  var removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.textContent = 'remove';

  removeLink.addEventListener('click', function (event) {
    event.preventDefault();

    removePost(newPostDiv.id);
  });
  

  var commentLink = document.createElement('a');
    commentLink.href = '#';
    commentLink.textContent = 'comments';

  var newPostTextNode = document.createTextNode(' ' + text + ' - Posted By: ' + name);
   
  newPostTextP.appendChild(removeLink);
  newPostTextP.append(' ');
  newPostTextP.appendChild(commentLink);
  newPostTextP.appendChild(newPostTextNode);

  var newPostHR = document.createElement('hr');

  //debugger;
  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostHR);

  return newPostDiv;

}


function removePost(id) {
  var postToRemove = document.getElementById(id)
  postToRemove.remove()
}



document.getElementById('submit').addEventListener('click', function (event){
  event.preventDefault();
  var newPost = createPost();

  var postsDiv = document.querySelector('.posts');
  postsDiv.append(newPost);

});


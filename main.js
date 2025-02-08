document.getElementById('submit').addEventListener('click', function (){
  var name = document.getElementById('name').value;
  var text = document.getElementById('message').value;

  var postsDiv = document.querySelector('.posts');

  var newPostDiv = document.createElement('div');

  var newPostTextP = document.createElement('p');
  var newPostTextNode = document.createTextNode(text);
  newPostTextP.appendChild(newPostTextNode);

  var newPostNameNode = document.createTextNode(' - Posted By: ' + name);
  newPostTextP.appendChild(newPostNameNode);

  var newPostHR = document.createElement('hr');

  debugger;
  newPostDiv.append(newPostTextP);
  newPostDiv.append(newPostHR);

  postsDiv.append(newPostDiv);



});
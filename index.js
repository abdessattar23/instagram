import instagram from 'instagram-scraper-api';
function getUser(){
  var username = document.getElementsByTagName('input')[0].value;
instagram
  .user(username)
  .then((user) => console.log(user))
  .catch((err) => console.error(err));
  
}

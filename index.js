const instagram = require('instagram-scraper-api');
var data;
function getUser(){
  var username = document.getElementsByTagName('input')[0].value;
instagram
  .user(username)
  .then((user) => console.log(user))
  .catch((err) => console.error(err));
  
}

const InstaScrape = require('instagram-scraping');

const username = document.querySelectorAll('input')[0].value;
function getUser(){
InstaScrape.getUserData(username).then((result) => {
  console.log(result);
}).catch((err) => {
  console.error(err);
});
}

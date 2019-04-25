const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('YOUR_API_KEY');
 
newsapi.v2.topHeadlines({
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
});
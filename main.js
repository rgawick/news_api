let post = document.getElementById("post")

let newsItems = news.articles.map(function(x){
  return `
  <li>
  <a href="${x.url}"><h1>${x.title}</h1></a>
  <p>Story by ${x.author}</p>
  <p>${x.description}</p>
  <img src="${x.urlToImage}" class="center storyimg">
  <p>${x.publishedAt}</p>
  </li>`
})
post.innerHTML = newsItems.join('')

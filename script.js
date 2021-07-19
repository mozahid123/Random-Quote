
// let btn=document.getElementById("btn")
// btn.addEventListener("click",function(){
//     btn.innerHTML=Math.floor(btn.innerHTML)+1
// })
let Text=document.getElementById("text")
let Author=document.getElementById("author")
let NewQuote=document.getElementById("new-quote")
let body=document.querySelector('body')



let color=['#453636','#f34343','#e0b8b8','#1e1010','#640606','#549e11','#e6a851','#224ad3','#bf0f5d','#fdbb2d']


function Quote(){
    fetch("https://type.fit/api/quotes")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        let randomNum=Math.floor(Math.random()*(1642-0)+0)   
      let {text,author}=data[randomNum]
      Text.innerHTML=(`<i class="fa fa-quote-left" aria-hidden="true"></i> ${text}`)
      Author.innerHTML=(`-${author}`)
  
      // console.log(text)
      // console.log(author)
  
    });
}
Quote()

NewQuote.addEventListener("click",function(){
    Quote()
    let randomColor=Math.floor(Math.random()*(6-0)+0)
    body.style.backgroundColor=color[randomColor]
})


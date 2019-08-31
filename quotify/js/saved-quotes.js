const getQuotesHandle = document.querySelector('#getQuotes');
const quoteHandle = document.getElementById('quote');
const quoteAuthorHandle = document.getElementById('quoteAuthor');
const quotesArray = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : [];
let quoteIndexNum = 0;

function displayQuote(quoteIndex) {
    quoteHandle.innerHTML = quotesArray[quoteIndex];
    quoteAuthorHandle.innerHTML = quotesArray[quoteIndex + 1];
    quoteIndexNum = quoteIndex + 2;
  //console.log(quoteIndexNum);
}

window.addEventListener('load', function(){
    // console.log(quotesArray.length);
    // for(let i = 0; i < quotesArray.length; i++) {
    //     console.log(i,quotesArray[i]);
    // }
    if(quotesArray.length === 0) {
        alert("There are no quotations available in local storage");
    } else {
      //console.log(quoteIndexNum);
        displayQuote(quoteIndexNum);
    }
})

getQuotesHandle.addEventListener('click', function(){
    if(quoteIndexNum < (quotesArray.length - 1)) {
        displayQuote(quoteIndexNum);
    } else {
        quoteIndexNum = 0;
        displayQuote(quoteIndexNum);
    }  
})


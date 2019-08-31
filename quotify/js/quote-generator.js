const getQuotesHandle = document.querySelector('#getQuotes');
const quotesListHandle = document.getElementById('quotesList');
const saveToLocalHandle = document.querySelector('#saveToLocal');
const quoteHandle = document.getElementById('quote');
const quoteAuthorHandle = document.getElementById('quoteAuthor');

const quotesArray = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : [];
localStorage.setItem('quotes',JSON.stringify(quotesArray));

// const quotes = JSON.parse(localStorage.getItem('quotes'));

// function liMaker(quote) {
//     const liTag = document.createElement('li');
//     liTag.textContent = quote;
//     quotesListHandle.appendChild(liTag);
// }

// quotes.forEach(function(quote){
//     liMaker(quote);
// });

window.addEventListener('load', function(){
    axios.get('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(function(response){
        console.log(response.status);
        console.log(response.data);
        quoteHandle.innerHTML = response.data.quoteText;
        quoteAuthorHandle.innerHTML = response.data.quoteAuthor;
    })
    .catch(function(err){
        console.log(err);
    })
})

getQuotesHandle.addEventListener('click', function(){
    fetch('https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
        .then(function(response){
            return response.json();     
        })
        .then(function(quotes){
            console.log(quotes);
            quoteHandle.innerHTML = quotes.quoteText;
            quoteAuthorHandle.innerHTML = quotes.quoteAuthor;
            saveToLocalHandle.textContent = 'Save to local';
            saveToLocalHandle.disabled = false;
        })
        .catch(function(err){
            console.log(err);
        })
})


saveToLocalHandle.addEventListener('click', function(){
    quotesArray.push(quoteHandle.innerHTML,quoteAuthorHandle.innerHTML);
    localStorage.setItem('quotes', JSON.stringify(quotesArray));
    saveToLocalHandle.textContent = 'Saved'
    saveToLocalHandle.disabled = true;
});

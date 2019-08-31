const addquoteHandle = document.getElementById('addquote');
const quoteHandle = document.getElementById('quote');
const authorHandle = document.getElementById('author');
const btnSaveHandle = document.getElementById('btnSave');
const quotesArr = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : [];

addquoteHandle.addEventListener('submit', function(e){
    e.preventDefault();
    quotesArr.push(quoteHandle.value,authorHandle.value);
    
    console.log(quotesArr.length);
    for(let i = 0; i < quotesArr.length; i++) {
        console.log(i,quotesArr[i]);
    }
    localStorage.setItem('quotes', JSON.stringify(quotesArr));
    quoteHandle.value = '';
    authorHandle.value = '';
})

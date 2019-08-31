const quoteslistHandle = document.getElementById('quoteslist');
const quotesArr = localStorage.getItem('quotes') ? JSON.parse(localStorage.getItem('quotes')) : [];
let quoteIndexNum = 0;

function liMaker(quote,quoteAuthor) {
    const liTag = document.createElement('li');
    liTag.style.border = "1px solid black";
    const pTag = document.createElement('p');
    const qTag = document.createElement('q');
    const deleteButtonTag = document.createElement('button');
    const editButtonTag = document.createElement('button');
    deleteButtonTag.textContent = 'delete';
    editButtonTag.textContent = 'edit';
    deleteButtonTag.style.backgroundColor ='brown';
    deleteButtonTag.style.color ='white';
    editButtonTag.style.backgroundColor ='green';
    editButtonTag.style.color ='white';
    deleteButtonTag.addEventListener('click', function(){
       console.log(quotesArr);
       quotesArr.splice(quotesArr.indexOf(quote),2);
       console.log(quotesArr);
       localStorage.setItem('quotes',JSON.stringify(quotesArr));
       quoteslistHandle.removeChild(liTag);
    });
    editButtonTag.addEventListener('click', function(){
       alert("Edit Button Clicked");

    //    <div id="root">
    //         <form id="addquote">
    //            <textarea id="quote" rows="10" cols="50"></textarea>
    //            <br/>
    //            <input type="text" placeholder="author" id="author"/>
    //            <br/>
    //            <input type="submit" value="Save" id="btnSave"/>
    //         </form>
    //     </div>
        const divTag = document.createElement('div');
        const formTag = document.createElement('form');
        const textAreaTag = document.createElement('textarea');
        textAreaTag.value = quote;
        const textFieldTag = document.createElement('input');
        textFieldTag.setAttribute("type","text");
        textFieldTag.value = quoteAuthor;
        const updateButtonTag = document.createElement('input');
        updateButtonTag.setAttribute("type","submit");
        updateButtonTag.textContent = "Update";
        const cancelButtonTag = document.createElement('input');
        cancelButtonTag.setAttribute("type","button");
        cancelButtonTag.textContent = "Cancel";
        formTag.append(textAreaTag.textFieldTag,updateButtonTag,cancelButtonTag);
        divTag.appendChild(formTag);
        console.log(quoteslistHandle.parentElement);
        quoteslistHandle.appendChild(divTag);
    });
    
    qTag.innerHTML = quote;
    const spanTag = document.createElement('span');
    spanTag.innerHTML = '<br/>'+quoteAuthor;
    pTag.append(qTag,spanTag);
    liTag.append(pTag,deleteButtonTag,editButtonTag);
    quoteslistHandle.appendChild(liTag);
    quoteIndexNum += 2;
}



// function liMaker(quote,quoteAuthor) {
//     const divTag = document.createElement('div');
//     divTag.style.border = "thin solid black";
//     const pTag = document.createElement('p');
//     const qTag = document.createElement('q');
//     const deleteButtonTag = document.createElement('button');
//     const editButtonTag = document.createElement('button');
//     deleteButtonTag.textContent = 'delete';
//     editButtonTag.textContent = 'edit';
//     deleteButtonTag.style.backgroundColor ='brown';
//     deleteButtonTag.style.color ='white';
//     deleteButtonTag.addEventListener('click', function(){
//        alert("Delete Button Clicked");
//        quoteslistHandle.removeChild(divTag);
//     });
//     editButtonTag.addEventListener('click', function(){
//        alert("Edit Button Clicked");
//     });
//     editButtonTag.style.backgroundColor ='green';
//     editButtonTag.style.color ='white';
//     qTag.innerHTML = quote;
//     const spanTag = document.createElement('span');
//     spanTag.innerHTML = '<br/>'+quoteAuthor;
//     pTag.append(qTag,spanTag);
//     divTag.append(pTag,deleteButtonTag,editButtonTag);
//     quoteslistHandle.appendChild(divTag);
//     quoteIndexNum += 2;
// }



// function liMaker(quote,quoteAuthor) {
//     const liTag = document.createElement('li');
//     const qTag = document.createElement('q');
//     qTag.innerHTML = quote;
//     const spanTag = document.createElement('span');
//     spanTag.innerHTML = '<br/>'+quoteAuthor;
//     liTag.append(qTag,spanTag);
//    // console.log(liTag.innerHTML);
//     quoteslistHandle.appendChild(liTag);
//     quoteIndexNum += 2;
// }


// function liMaker(quote,quoteAuthor) {
//     const liTag = document.createElement('li');
//     const qTag = document.createElement('q');
//     qTag.innerHTML = quote;
//     const spanTag = document.createElement('span');
//     spanTag.innerHTML = quoteAuthor;
//     liTag.innerHTML = quote+'<br/>'+`${quoteAuthor}`;
//     console.log(liTag.innerHTML);
//     quoteslistHandle.appendChild(liTag);
//     quoteIndexNum += 2;
// }

if(quotesArr.length !== 0) {
    while(quoteIndexNum < (quotesArr.length - 1)) {
        console.log("inside if loop");
        liMaker(quotesArr[quoteIndexNum], quotesArr[quoteIndexNum + 1]);
    }
}
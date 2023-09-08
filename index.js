document.querySelector("#check").addEventListener("click", addBookToLibrary)

let myLibrary = new Array();


 
    function addBookToLibrary(){    
        let title = document.querySelector("#book").value;
        let author = document.querySelector("#author").value;
        let numOfPages = document.querySelector("#numOfPages").value;
        let read = document.querySelector("#checkbox").value;
        if (title && author && numOfPages){
            document.querySelector(".library-wrapper").innerHTML = null;

            myLibrary.push(new Book(title, author, numOfPages));
    
            myLibrary.forEach(element => {

            element.indexes = myLibrary.indexOf(element);

            let bookE = document.createElement("section");
            bookE.classList = `card m${element.indexes}`;
            bookE.innerHTML = `<h3>Title: ${element.title}<h3> <h4>Author: ${element.author}</h4><h4>Number of pages: ${element.numOfPages}</h4><p class="green">read</p><button type="button" class="button" id=${element.indexes} >remove</button>`;
        
            document.querySelector(".library-wrapper").append(bookE);
    });

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach(element => element.addEventListener("click", remover))
        }
    }


function remover(click){
    let target = click.target.id;
    delete myLibrary[target];
    document.querySelector(`.m${target}`).remove()
}
function Book(title, author, numOfPages){
    this.author = author
    this.title = title
    this.numOfPages = numOfPages
}
document.querySelector(`.clear`).addEventListener(`click`, () => {
    myLibrary.length = 0;
    document.querySelector(`.library-wrapper`).innerHTML = null;
})
document.querySelector("#get-form").addEventListener(`click`, () => {
    document.querySelector(".form-holder").classList.add(`add-form`)
})
document.querySelector(".icon").addEventListener(`click`, () => {
    document.querySelector(".form-holder").classList.toggle(`add-form`)
})
document.querySelector(".green").addEventListener(`click`, () =>{
    document.querySelector(".green").classList.toggle(`red`) 
})


















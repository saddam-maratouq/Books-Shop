
'use strict' 

let form = document.getElementById('bookForm')  

let tabel = document.getElementById('bookTabel')




book.item = []

function book (bookName,bookPrice){

this.bookName = bookName;

this.bookPage = randomPage(1,500)

this.bookPrice = bookPrice;

book.item.push(this)

saveLocal();
}


function randomPage(max,min) {

    return Math.floor(Math.random()* (max-min)) + min  
    
}





let mainHeader =['Book Name','Book pages','price']  


function tabelHeader() {

    let thRow = document.createElement('tr')

        tabel.appendChild(thRow)

    for (let i = 0; i < mainHeader.length; i++) {
        
        let tHeader = document.createElement('th')

        tHeader.textContent = mainHeader[i]
       
       
        thRow.appendChild(tHeader)

    }

   
    
}

tabelHeader();






book.prototype.render = function () {
    

let bookRow = document.createElement('tr')

tabel.appendChild(bookRow)  


for (let i = 0; i < book.item.length; i++) {

bookRow.textContent=''
    let bookTd = document.createElement('td')
    
    bookTd.textContent = this.bookName  


    let pageTd = document.createElement('td')

    pageTd.textContent = this.bookPage


    let priceTd =  document.createElement('td') 

    priceTd.textContent = this.bookPrice



    bookRow.appendChild(bookTd)
    
    bookRow.appendChild(pageTd)
    
    bookRow.appendChild(priceTd)  

}


}






function saveLocal() {
    
    let data = JSON.stringify(book.item) 

    localStorage.setItem('book',data)
}



function readLocal() {
    

    let data = localStorage.getItem('book')

    let normalObj = JSON.parse(data)

if (normalObj !== null) {
    

    for (let i = 0; i < normalObj.length; i++) {
        
        let theItem = new book (normalObj[i].bookName,normalObj[i].bookPage,
            normalObj[i].bookPrice ) 

            theItem.render();
        
    }
}

}


readLocal();






form.addEventListener('submit',sendInfo)

function sendInfo(event) {
    
    event.preventDefault();

    let BookName = event.target.bookName.value 

    let BookPrice = event.target.bookPrice.value 

   let item = new  book (BookName,BookPrice)

   item.render();

}
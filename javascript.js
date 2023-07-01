let button = document.getElementById('addButton');

show();
// Dispaly the notes
function show() {
    let notesObj = [];
    let notes =localStorage.getItem('notes');
    if(notes!=null)
    notesObj=JSON.parse(notes);
    if (notesObj.length != 0 ) {
        

        let html = "";
        notesObj.forEach(function (element, index) {

            html += `<div class="notecard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h3>${element[0]}</h3>
          <p class="card-text">${element[1]}</p>
          <button type="button" id="${index}" onclick="Delete(this.id)" class="btn btn-outline-danger">Delete Note</button>
        </div>
      </div>`

        });
        let content = document.getElementById('container');
        content.innerHTML = html;
    }
    else {
        let content = document.getElementById('container');
        content.innerHTML = "No notes"
    }

}
button.addEventListener('click', function () {
    let text = document.getElementById('note');
    let t=document.getElementById('notetitle');
    let title=t.value;
    let note = text.value;
    let obj=[title,note];
    if (note != "") {
        let notesObj = [];
        
        let notes = localStorage.getItem('notes');
        if (notes != null) {
            notesObj = JSON.parse(notes);
            notesObj.push(obj);
            localStorage.setItem('notes', JSON.stringify(notesObj));
        }
        else {

            notesObj.push(obj);
            localStorage.setItem('notes', JSON.stringify(notesObj));
        }
        show();
        text.value ="";
        t.value="";
    }
    else {
        alert("Write Someting");
    }
});
function Delete(index) {

    let content = localStorage.getItem('notes');
    let notesObj = JSON.parse(content);
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    // console.log(notesObj+" "+index);
    show();

}

let search=document.getElementById('Searchtxt');
search.addEventListener("input",function() {
    let inputval=search.value;
    console.log(inputval);
    let notecard=document.getElementsByClassName('notecard');
    
    Array.from(notecard).forEach(function(element) {
        let cardtxt=element.getElementsByTagName('p')[0].innerText;
        console.log(typeof(cardtxt));
        if(cardtxt.includes(inputval))
        {
            element.style.display='block';
        }
        else
        element.style.display='none';
    })

})
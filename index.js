// document.getElementById('done').addEventListener('click',()=>{
//     document.getElementsByClassName('card').style.display = 'none';
// });
let btn = document.getElementById('btn');
showList();  

btn.addEventListener('click',(e)=>{
    let work = document.getElementById('Textarea');
    let displayele = localStorage.getItem('displayele');                              
    if(displayele==null){
        larr = [];
    }
    else{
        larr = JSON.parse(displayele);
    }
    larr.push(work.value);
    localStorage.setItem('displayele',JSON.stringify(larr))
    work.value='';
    // console.log(larr);
    showList();  
})


function showList(){
    let displayele = localStorage.getItem('displayele');                              
    if(displayele==null){
        larr = [];
    }
    else{
        larr = JSON.parse(displayele);
    }
    let html = ""   
    larr.forEach(function(e,i){
        html += `
                <div class="card w-25 my-2 mx-2">
                    <div class="card-body">
                    <h5 class="card-title">Work No. ${i+1} <span class="mx-2"><button id='${i}' onclick='done(this.id)' class="btn btn-primary">Done</button></span> </h5>
                    <p class="card-text">${e}.</p>
                    
                    </div>
                </div>
                `
    });
    let displayEle = document.getElementById('display');
    if (larr.length != 0) {
        displayEle.innerHTML = html;
    }
    else {
        displayEle.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function done(i){
    let displayele = localStorage.getItem('displayele');                              
    if(displayele==null){
        larr = [];
    }
    else{
        larr = JSON.parse(displayele);
    }

    larr.splice(i,1);
    localStorage.setItem('displayele',JSON.stringify(larr));
    showList();

}
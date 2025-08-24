let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
let item=document.createElement("li");//create a list when we press add task(instaed of "li" of we type "ul" a new ul will be created)
item.innerText=inp.value;//returns us the text which we entered in input tag

let delBtn=document.createElement("button");//for new list items
delBtn.innerText="delete";
delBtn.classList.add("delete");//it adds a delete button
item.appendChild(delBtn);//this delBtn we have to add inside li items ie item in this code

ul.appendChild(item);//we have to insert item inside a ul
console.dir(inp.value);
inp.value="";//clear the input tag once we press add task
    
});
ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){//let's us know which target button has been pressed(nodeName let's us know wheter button ot para or div triggered the event)
  let lisItem=event.target.parentElement;//BUTTON parent element is item("li")
  lisItem.remove();//that particular list is removed
  console.log(lisItem);
  }
});


// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }   // this only works for exixting button not the new ones 
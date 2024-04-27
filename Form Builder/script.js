const form = document.body.querySelector('form');
console.log(form);
const Header1 = document.createElement("div");
Header1.classList.add("Form-Builder-head");
Header1.innerText = "Form Builder";
form.appendChild(Header1);

var SelectedElement;
 

const ELEMENTBOX = document.body.querySelector('#elementBox');

const Header2 = document.createElement("div");
Header2.classList.add("Form-Builder-head");
Header2.innerText = "Element Box";


 const label = document.createElement("label");
 label.innerText="Label"

 const input =document.createElement("input");
 input.classList.add("inputbox")

 ELEMENTBOX.appendChild(Header2);
 ELEMENTBOX.appendChild(label);
 ELEMENTBOX.appendChild(input);

 document.body.querySelector('label').addEventListener('click',function(){
    SelectedElement = document.createElement("label");
    SelectedElement.innerText="Label";
    setTimeout(() => {
      SelectedElement=null
    }, 5000);
    console.log(SelectedElement);
 })


 document.body.querySelector('input').addEventListener('click',function(){
   addinput= document.createElement("input");
   SelectedElement = addinput
    console.log(SelectedElement);
    setTimeout(() => {
      SelectedElement=null
    }, 5000);
 })
 console.log(SelectedElement);
// ======================================================================
form.addEventListener('click',(event)=>{
    const xcordi=event.clientX;
    const ycordi=event.clientY;
   
   
    
    const Element = SelectedElement;
    Element.classList.add("addedItem");
    Element.style.top=(ycordi-10)+"px";
    Element.style.left=(xcordi-20)+"px";
    
    form.appendChild(Element);
    console.log("x=",xcordi,"y=",ycordi,"element",Element);
})





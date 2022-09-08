//GETELEMENT BY TAG NAME
var li=document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1]);
// li[0].textContent='hello';
// li[1].style.fontWeight='bold';
li[2].style.backgroundColor='green';

 //it gives an error

//items.style.backgroundColor="#a2a3a4";

for(let i=0; i<li.length; i++){
    li[i].style.fontWeight='bold';
}
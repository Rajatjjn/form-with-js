// Import stylesheets
import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const form=document.getElementById("myform")

form.addEventListener("submit",function(event){
event.preventDefault()
  const nameinput=document.getElementById("name")
  const emailinput=document.getElementById("email")

  const name=nameinput.value;
  const email=emailinput.value;

  if(!name || !email){
alert("fill")
return
  }



const formd={
  id:Date.now(),
  name:name,
  email:email
}
alert(`Name: ${name}\nEmail: ${email}`);
console.log(formd)
form.reset()
})
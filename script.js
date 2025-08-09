var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    icon.src="sun.png";
  }else{
    icon.src="moon.png";
  }
};
const quotes = [
  "I hope you guys are doing extremely well.",
  "Stay focused and never give up.",
  "Success starts with self-belief.",
  "Every task is a step to your goal.",
  "Work hard in silence, let success make the noise.",
  "Discipline is the bridge between goals and accomplishment.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t stop until you’re proud."
];
setInterval(()=>{
    const quotelement=document.getElementById("quote");
    const idx=Math.floor(Math.random()*quotes.length);
    quotelement.textContent=quotes[idx];
},4000);

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = document.getElementById("addtask");

addTask.addEventListener("click", function() {
  if (inputBox.value === '') {
    alert("Please write something to add.");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value; 
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.textContent="\u00d7";
    li.appendChild(span);
    inputBox.value = ''; 
    saveData();
  }
});

listContainer.addEventListener("click",function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
  }
  saveData();
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
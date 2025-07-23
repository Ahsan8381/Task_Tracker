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

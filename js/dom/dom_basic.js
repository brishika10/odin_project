const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p_content=document.createElement("p");
p_content.textContent="Helloooo, i am red";
p_content.style.color='red';
container.appendChild(p_content);

const div_content=document.createElement("div");
div_content.style.border= "1px solid black";
div_content.style.backgroundColor="pink";


const div_h1=document.createElement("h1");
div_h1.textContent="I'm in a div!!";
const div_p=document.createElement("p");
div_p.textContent='Me too!!';
div_content.appendChild(div_h1);
div_content.appendChild(div_p);

container.appendChild(div_content);
 btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World 1");
});
btn.addEventListener("click", () => {
  alert("Hello World 2");
});

btn.addEventListener("click", (e) => {
  console.log(e.target);
});

btn.addEventListener("click", (e) => {
  console.log(e.clientX, e.clientY);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
document.addEventListener("keydown", (e) => {
  console.log(e.key);
});
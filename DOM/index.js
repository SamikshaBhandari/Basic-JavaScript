
const demo=document.getElementById("demo")
const container=document.getElementById("container")

const newH1=document.createElement("h1");
const newH2=document.createElement("h2");
const newH3=document.createElement("h3");

newH1.textContent="This is new H1 element is created";
newH2.textContent="This is Page";
newH3.textContent="HEllo Samiksha";
console.log(newH1)

// @ts-ignore
// container.appendChild(newH1,newH2);
// @ts-ignore
container.append(newH1,newH2)
// @ts-ignore
container.prepend(newH3)
// @ts-ignore
demo.textContent="HEllo world"
newH2.remove();
// @ts-ignore
demo.style.color="Red";
 // @ts-ignore
 demo.style.backgroundColor="blue"

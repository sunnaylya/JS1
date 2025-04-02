import "./index.css";
import jsImg from "../assets /javascript.png";


const body = document.querySelector("body");

const img = document.createElement("img");
img.src = jsImg;

const h1 = document.createElement("h1");
h1.innerText = "I love JavaScript";

body.append(img);
body.append(h1);
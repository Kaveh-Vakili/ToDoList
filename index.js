import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


const inputBox=$.getElementById("text-box");
const list=$.getElementById("List");

function addToList(){
    if(inputBox==''){
        alert("Need to add something!");

    }
    else{
        let li=$.createElement("li");
        li.innerHTML=inputBox.value();
        list.appendChild(li);
    }
}






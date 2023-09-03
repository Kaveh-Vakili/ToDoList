const inputBox= document.getElementById("input-box");
const list=document.getElementById("List");

function addTask(){
	if(inputBox.value==''){
		alert('Must type Something!');
	}

	else{
		let li=document.createElement("li");

		li.innerHTML=inputBox.value;
		list.appendChild(li);
		let crossOut=document.createElement("crossOut");
		crossOut.innerHTML="\u00d7";
		li.appendChild(crossOut);

	}

inputBox.value="";




}
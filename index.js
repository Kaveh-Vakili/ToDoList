const inputBox= document.getElementById("input-box");
const list=document.getElementById("list");

function addTask(){
	if(inputBox.value==''){
		alert('Must type Something!');
	}

	else{
		let li=document.createElement("li");

		li.innerHTML=inputBox.value;
		list.appendChild(li);

	}






}
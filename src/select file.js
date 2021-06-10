window.addEventListener("onload", function(){
const file1btn = document.getElementById("file1");
const custom1btn = document.getElementById("custombut1");
const custom1txt = document.getElementById("customtxt1");
const file2btn = document.getElementById("file2");
const custom2btn = document.getElementById("custombut2");
const custom2txt = document.getElementById("customtxt2");

//to select only csv files
custom1btn.addEventListener("click", function() {
	file1btn.click();
});
//to display whether file is chosen
file1btn.addEventListener("change", function(){
	if(file1btn.value){	
		// eslint-disable-next-line no-useless-escape
		custom1txt.innerHTML = file1btn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

	}else{
		custom1txt.innerHTML = "No file choose, yet.";
		
	}
});
	

custom2btn.addEventListener("click", function() {
	file2btn.click();
});

//to display whether file is chosen
file2btn.addEventListener("change", function(){
	if(file2btn.value){
		// eslint-disable-next-line no-useless-escape
		custom2txt.innerHTML = file2btn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
	}else{
		custom2txt.innerHTML = "No file choose, yet.";
	}
});

//display selected file
var loader = function(e){
	let file = e.target.files;

	let show="<span>Selected file : </span>"+file[0].na

	let output=document.getElementById("selector");
	output.innerHTML = show;
	output.classList.add("active");
};
 
let fileInput = document.getElementById("file");
fileInput.addEventListener("change",loader);

});

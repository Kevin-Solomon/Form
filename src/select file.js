window.addEventListener("load",function(){
	const file1btn = document.getElementById("file1");
	const custom1btn = document.getElementById("custombut1");
	const custom1txt = document.getElementById("customtxt1");
	const file2btn = document.getElementById("file2");
	const custom2btn = document.getElementById("custombut2");
	const custom2txt = document.getElementById("customtxt2");
	const file3btn=document.getElementById("file3");
	const company1btn=document.getElementById("companybut1");
	const custom3txt = document.getElementById("customtxt3");
	
	//to select the file button under the ordinary button "custom1btn"
	custom1btn.addEventListener("click", function() {
	file1btn.click();
	});
	//to display whether file is chosen
	file1btn.addEventListener("change", function(){
	if(file1btn.value){ 
		// eslint-disable-next-line no-useless-escape
		custom1txt.innerHTML = file1btn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

	}else{
		custom1txt.innerHTML = "No file chosen, yet.";
		
	}
	});

	custom2btn.addEventListener("click", function() {
	file2btn.click();
	});

	//to display the uploaded filename
	file2btn.addEventListener("change", function(){
	if(file2btn.value){
		// eslint-disable-next-line no-useless-escape
		custom2txt.innerHTML = file2btn.files.length+" File(s) uploaded.";
	}else{
		custom2txt.innerHTML = "No files chosen, yet.";
	}
	});

	if(company1btn){
		company1btn.addEventListener("click", function() {
			file3btn.click();
		});	
	}

	  

	file3btn.addEventListener("change", function(){
		if(file3btn.value){ 
		// eslint-disable-next-line no-useless-escape
		custom3txt.innerHTML = file3btn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
	
		}else{
		custom3txt.innerHTML = "No file chosen, yet.";
		}
	});
  
});
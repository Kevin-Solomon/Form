window.addEventListener("load",function(){
    //this file is to display the student details
    const submitbtn = document.getElementById('upload');
    submitbtn.addEventListener("click", function(e) {

       //perform validation on the csv file uploaded 
        var imgsUpload = document.getElementById("file2").files;
                    //check if file is uploaded by user and supported by web browser
        if (typeof (FileReader) != "undefined") {
                
            const mainDiv = document.getElementById("dvCSV");
                if (imgsUpload) {
                    [].forEach.call(imgsUpload, readAndPreview);
                        
                }
                    
                function readAndPreview(file) {
    
                        
                        
                    var reader = new FileReader();
                    const stuDiv = document.createElement("div");
                    stuDiv.id = file.name;
                    stuDiv.className = "card";
                    mainDiv.appendChild(stuDiv);
                            
                    console.log("file uploaded");
                    reader.addEventListener("load", function () {
                        var image = new Image();
                        image.style.height = "170px";
                        image.style.width = "130px"
                        image.alt = image.id = file.name;
                        image.src = this.result;
                        stuDiv.appendChild( image );
                            
                        console.log(file.name);
                    }, false);        
                          reader.readAsDataURL(file);
                          readCSV(stuDiv);
               
                } 
                 
        
    
                function readCSV(stuDiv){
                    console.log("next read csv");
                    var reader2 = new FileReader();
                    var fileUpload = document.getElementById("file1");
                    
                    reader2.onload = function (e) {
                        var rows = e.target.result.split("\n");
                        for (var i = 1; i < rows.length-1; i++) {
                            //file data split into rows
                            var cells = rows[i].split(",");
                            const divID = cells[1].replace("\r","");
                            const stuDivID = stuDiv.id.split(".")[0];
                            if(stuDivID===divID){
                            //insert the student name & ID into the card
                                for(var j=0; j<cells.length; j++){
                                    console.log("working");
                                    var p = document.createElement("p");
                                    p.innerHTML=cells[j];
                                    stuDiv.appendChild(p);
                                    console.log(stuDiv);
                                }
                            }
                        }
                        
                    };
                    //calls function to read the csv file
                    reader2.readAsText(fileUpload.files[0]);
                }
                
            } 
                else {
                //error message for unsupported browsers
                    alert("This browser does not support HTML5.");
                }
            
        
    });
    
     
    
});


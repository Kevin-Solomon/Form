window.addEventListener("load",function(){
    //this file is to display the student details
    const submitbtn = document.getElementById('upload');
    submitbtn.addEventListener("click", function(e) {
        //check if file is uploaded by user and supported by web browser
        if (typeof (FileReader) != "undefined") {
            var imgsUpload = document.getElementById("file2").files;    
            var mainDiv = document.getElementById("dvCSV");
            console.log("next read csv");
            
            var fileUpload = document.getElementById("file1");
            var reader = new FileReader();
            reader.onload = function(progressEvent) {
                    //console.log(this.result);
                    var file = this;
                    readCSV(file);
            };
            reader.readAsText(fileUpload.files[0]);


            function readCSV(file){
                console.log("read csv");
                var rows = file.result.split("\n");
                console.log(rows.length);
                for (var i = 1; i < rows.length-1; i++) {
                    console.log(i);
                    //file data split into rows
                    var cells = rows[i].split(",");
                       
                    var stuDiv = document.createElement("div");
                    stuDiv.className="card";
                    stuDiv.id=cells[1].replace(/[\r]/g, "");
                    mainDiv.appendChild(stuDiv);
                    var stuDivid=stuDiv.id;
                    
                    console.log(stuDiv.id);
                    
                    for(var k=0;k<imgsUpload.length;k++){
                        var imgname=imgsUpload[k].name.split(".")[0];
                        if(stuDivid.localeCompare(imgname)===0){
                            console.log(stuDivid,imgname);
                            readAndPreview(stuDiv,imgsUpload[k],cells);     
                        }     
                    }
                    
                    //insert the student name & ID into the card
                    
                }
            
            }
            function readAndPreview(stuDiv,file,cells) {

                // Make sure `file.name` matches our extensions criteria
                if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                  var reader = new FileReader();
            
                  reader.addEventListener("load", function () {
                    var image = new Image();
                    image.alt=stuDiv.id;
                    image.id = file.name;
                    image.src = this.result;
                    
                    stuDiv.appendChild( image );
                    for(var j=0; j<cells.length; j++){
                        console.log("working");
                        var p = document.createElement("p");
                        p.innerHTML=cells[j];
                        stuDiv.appendChild(p);
                        console.log(stuDiv);
                        
                    } 
                  }, false);
            
                  reader.readAsDataURL(file);
                }
            
            return stuDiv;
            }
        }
    
        else {
            //error message for unsupported browsers
            alert("This browser does not support HTML5.");
        }
            
        
    });
    
     
    
});
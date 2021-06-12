window.addEventListener("load",function(){
    //this file is to display the submitted csv file
    const submitbtn = document.getElementById('upload');
    submitbtn.addEventListener("click", function() {

       //perform validation to retrieve the file uploaded 
        var fileUpload = document.getElementById("file1");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {

            //check if file is uploaded by user
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var dvCSV = document.getElementById("dvCSV");
                    dvCSV.innerHTML = "";
                    var rows = e.target.result.split("\n");
                    for (var i = 1; i < rows.length-1; i++) {

                        //div.class=card arrays are created
                        var row = document.createElement("div");
                        row.innerHTML="";
                        row.className="card";

                        //file data split into rows
                        var cells = rows[i].split(",");
                        /*file is of type file:// protocol, unable to upload local file directory
                        var img = document.createElement("img");
                        img.innerHTML="";
                        img.src=cells[2];
                        row.appendChild(img);*/

                        //insert the student name & ID into the card
                        for(var j=0; j<cells.length-1; j++){
                            var p = document.createElement("p");
                            
                            p.innerHTML=cells[j];
                            row.appendChild(p);
                        }
                        //insert the array of cards into the main div class=dvCSV
                        dvCSV.appendChild(row);
                    }
                    
                }
                reader.readAsText(fileUpload.files[0]);
                } else {
                    //error message for unsupported browsers
                    alert("This browser does not support HTML5.");
                }
            } else {
                //to present submitting empty csv
                alert("Please upload a valid CSV file.");
            }
        
    });
    
     
    
});


window.addEventListener("load",function(){
    //this file is to display the template
    const submitbtn = document.getElementById('upload');
    
    submitbtn.addEventListener("click", function(e) {
        //the form elements are stored in the below variables
        var p_csv=document.getElementsByClassName("csv_img_msg");
        var fileUpload = document.getElementById("file1");
        var imgsUpload = document.getElementById("file2").files;
        var companyN = document.getElementById("cname_input");
        var ctc = document.getElementById("ctc_input");
        var cLogo = document.getElementById("file3");
        var isNumber = /^\d*\.?\d+$/.test(ctc.value);               //to check if CTC entered is a numeric or not
        
        //to check if filereader is supported by the browser
        if (typeof (FileReader) != "undefined") {
            //check if all the form elements are not null, then only display the congratulations template
            if(fileUpload.files.length!==0 && imgsUpload.length!==0 && cLogo.files.length!==0 && companyN.value!==null){
                //to remove the form validations
                for(var n=0;n<p_csv.length;n++){
                    p_csv[n].innerHTML="";
                }
                
                //store the div element in a variable
                var tempalateDiv = document.getElementById("temp-div");
                var mailDiv = document.getElementById("mail");
                mailDiv.style.display="block"; 
                tempalateDiv.style.display="block";    
                var mainDiv = document.getElementById("dvCSV");
                
                
                //comany logo input in template
                var tc=document.getElementById("clogo");
               var tclogo = new FileReader();
                tclogo.onload = function(progressEvent) {
                        
                        var img = this.result;
                         tc.src=img;            //reader calls the readCSV function with the csv file as the parameter
                };
                tclogo.readAsDataURL(cLogo.files[0]);


                //company name input in template
                var tcn=document.getElementById("cn");
                tcn.innerHTML=companyN.value;

                //company ctc input in template
                if(ctc.value!=="" && isNumber){           
                    var tctc1=document.getElementById("with");
                tctc1.innerHTML="With a CTC of Rs."+ctc.value+" Lakhs per annum.";
                }
                else{
                var tctc2=document.getElementById("with");
                tctc2.innerHTML=" ";
                }
                
                //read the csv file containing student list
                var reader = new FileReader();
                reader.onload = function(progressEvent) {
                        
                        var file = this;
                        readCSV(file);              //reader calls the readCSV function with the csv file as the parameter
                };
                reader.readAsText(fileUpload.files[0]);
                 
                
                function readCSV(file){
                    var rows = file.result.split("\n");         //file is split into rows
                    console.log(rows.length);
                    
                    for (var i = 1; i < rows.length-1; i++) {
                        console.log(i);
                        //file data split into rows
                        var cells = rows[i].split(",");             //each row is split into columns
                        
                        var stuDiv = document.createElement("div");         //a div tag is created to store individual student details and their photo
                        stuDiv.className="card";
                        stuDiv.id=cells[1].replace(/[\r\n]/g, "");          //remove any /r in the cell(roll no) 
                                             //the stuDiv is now inserted within the mainDiv
                        var stuDivid=stuDiv.id;
                        
                        console.log(stuDiv.id);
                        
                        for(var k=0;k<imgsUpload.length;k++){
                            var imgname=imgsUpload[k].name.split(".")[0];
                            if(stuDivid.localeCompare(imgname)===0){    //check the image folder to find image with same name as the students roll no.
                                console.log(stuDivid,imgname);
                                stuDiv = readAndPreview(stuDiv,imgsUpload[k],cells);
                                mainDiv.appendChild(stuDiv);      // calls the function to display the image 
                                break;                                                // parameters: stuDiv tag, required image file, individual record value
                            }     
                        }
                        
                    }
                
                }
                function readAndPreview(stuDiv,file,cells) {

                    // Make sure `file.name` matches our extensions criteria
                    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                    var reader = new FileReader();
                
                    reader.onload = function(progressEvent) {
                        var imgsrc = this;
                        var image = new Image();                    //create image tag
                        image.alt=stuDiv.id;                    //assign alt value as the student ID
                        image.id = file.name;
                        image.src = imgsrc.result;                    //assigns file path to src
                        
                        stuDiv.appendChild( image );            //image tag is inserted into the stuDiv
                        //insert p tags to contain the student name and ID
                            console.log("working");
                            for(var i=0;i<cells.length;i++){
                            var p = document.createElement("p");
                            p.innerHTML=cells[i];                       // student detail inserted within the p tag
                            stuDiv.appendChild(p);                          //now each stuDiv contains 1 student photo and, their name and ID
                            console.log(stuDiv);
                            }
                        
                        
                        
                        console.log(mainDiv.scrollHeight, mainDiv.scrollWidth); 
                    };
                
                    reader.readAsDataURL(file);
                    return stuDiv;
                    }
                    
                
                }
            }
            else{
                //to display the error message when form is submitted
            //to display the error message when form is submitted
            //to display the error message when form is submitted
                if(fileUpload.files.length===0){
                    p_csv[0].innerHTML="*File not uploaded";
                }
                if(imgsUpload.length===0){
                    p_csv[1].innerHTML="*Image Folder not uploaded";
                }
                if(companyN.value===""){
                    p_csv[2].innerHTML="*Enter Company name";
                }  
                if(cLogo.files.length===0){
                    p_csv[4].innerHTML="*Company logo not uploaded";
                }
            }
        }
    
        else {
            //error message for unsupported browsers
            alert("This browser does not support HTML5.");
        }
            
        
    });
    
     
    
});
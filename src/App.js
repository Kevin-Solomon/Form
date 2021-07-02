//import logo from './logo.svg';
import React from 'react';
import banner from './presidency banner.svg';
import './App.css';
import './display uploaded file.js';
import './template.css';
import './select file.js';
const axios = require('axios');

export default class App extends React.Component {
  submitHandler(){
   console.log("hello");
    axios.post('http://localhost:5001/auth/signup')
      .then(function (response) {
        // handle success
        console.log('sent');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  render() {
  return (
    <div className="App">
    <div className="bg-form">
      <div className="form-div">
        <p className="logo"></p>
        <h3 className="title">Congratulations<br/><small>Students placed!!</small></h3>
      
      
        <form className="csvForm" action="" id="basic-form" encType="multipart/form-data" method="post">
      
          <div className="browse1" >
              <input type="file" className='file1' id="file1" accept=".csv"  name="csv_file" hidden="hidden" required/>
              <button type="button"  id="custombut1">UPLOAD CSV File</button>
              <span id="customtxt1">No file chosen, yet.</span><br/>
              <span className="csv_img_msg"></span>
            </div>
            
            <div className="browse2">
                <input type="file" className='file2' id="file2" accept="images/*" name="student_files" multiple placeholder="browse2file"  hidden="hidden"  required/>
                <button type="button" id="custombut2">UPLOAD IMAGE Folder</button>
                <span id="customtxt2">No files chosen, yet.</span><br/>
                <span className="csv_img_msg"></span>
                            
            </div>
            <div className="wrapper" >
            <div className="companyDetail" id="cName-div">
              <input type="text" id="cname_input" name="company_name" required/>
              <label>Company Name</label><br/>
                <span className="csv_img_msg"></span>
            </div>          
            
            <div className="companyDetail" id="ctc-div">
              <input type="text" id="ctc_input" name="ctc_value" required/>
              <label><small>Enter CTC (in Lakhs)[Not Compulsory]</small></label><br/>
                <span className="csv_img_msg"></span>
            </div>
            </div><div className="companyLogo">
                <input type="file" className='file3' id="file3" name="logo_file" hidden="hidden"  accept="image/*" required/>
                <button type="button"  id="companybut1">COMPANY LOGO</button>
                <span id="customtxt3">No file chosen, yet.</span><br/>
                <span className="csv_img_msg"></span>
            </div>
            

            

          <a href="#dvCSV" ><button type="button" id="upload" className="submit" >Submit</button></a>
      </form>
    
    </div>

    <div className="info"><b>Developed and maintained by-</b><br/><small>Kusum Ramachandra-20181ISE0042<br/>Layana K.P-20181ISE0046<br/>Minitha J K-20181ISE0049</small><br/>
   <b>Guided by-</b><br/><small>Mr.Amogh Pramod Kulkarni-  Asst.Prof-CSE<br/>Mr.Srivinay-  Asst.Prof-CSE</small></div>

  </div>

  
  <form align="center">
  <div className="mail" id="mail">
  <button type="button" id="mailbut1" onClick={this.submitHandler}><b>Send mail?</b></button>
  </div>
  </form>
  
  <div className="template" id="temp-div">
    <img src={banner} alt="" id="presidency-banner" />
    <div className="congo"><b>Congratulates following Students for being placed in</b></div>
    <img className="clogo" src="" alt="" id="clogo"/>
    <div className="cn" id="cn"></div>
    <div className="with" id="with"></div>
    <div className="wish">Wishing them all the best and a bright future ahead</div>
    <div className="displayCSV" id="dvCSV" ></div>
  </div>
  </div>
  ); 
}
}

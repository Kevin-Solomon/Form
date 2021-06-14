//import logo from './logo.svg';
import './App.css';
import './select file.js';
import './display uploaded file.js';

import React from 'react';
export default class App extends React.Component {
	
	render() {
  return (
    <div className="App">
	<div className="bg-form">
		<div className="form-div">
      <p className="logo"></p>
		<h3 className="title">Congratulations<br/><small>Students placed!!</small></h3>
		
		
		<form className="csvForm" action="">
					<div className="browse1">
							<input type="file" name='file1' id="file1" accept=".csv"  placeholder="browse1file" hidden="hidden"  />
							<button type="button"  id="custombut1">CHOOSE FILE 1</button>
							<span id="customtxt1">No file chosen, yet.</span>
					</div>
					<div className="browse2">
							<input type="file" name='file2' id="file2"  webkitdirectory="true" multiple placeholder="browse2file"  hidden="hidden"  />
							<button type="button" id="custombut2">CHOOSE FILE 2</button>
							<span id="customtxt2">No file chosen, yet.</span>							
					</div>
					
					<a href="#dvCSV" ><button type="button" id="upload" className="submit" >Submit</button></a>
		
		</form>
		
		</div>
	</div>
	<div className="displayCSV" id="dvCSV" >
	
	</div>
    </div>
	
  );
  
}

}
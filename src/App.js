//import logo from './logo.svg';
import './App.css';
import './select file.js';
import './display uploaded file.js';
import React from 'react';
export default class App extends React.Component {
	/*constructor(props) {
		super(props);
		this.state={
			file1:'',
			file2:''
		}
	}
		handleSubmit(e) {
			e.preventDefault()
			const {file1, file2 } = e.target.elements
			console.log({file1: file1.value, file2: file2.value })
			
			
		}
	
	handleFile1Changed(event) {
		var csvFiles      = this.state.csvFiles;
		csvFiles.file1 = event.target.value;
	
		this.setState({ csvFiles:csvFiles });
	}
	handleFile2Changed(event) {
		var csvFiles      = this.state.csvFiles;
		csvFiles.file2 = event.target.value;
	
		this.setState({ csvFiles:csvFiles });
	}*/

	

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
							<input type="file" name='file2' id="file2" accept=".csv"  placeholder="browse2file"  hidden="hidden"  />
							<button type="button" id="custombut2">CHOOSE FILE 2</button>
							<span id="customtxt2">No file chosen, yet.</span>							
					</div>
					
					<button type="button" id="upload" className="submit" >Submit</button>
		
		</form>
		
		</div>
	</div>
	<div className="displayCSV" id="dvCSV" >
	
	</div>
    </div>
	
  );
  
}

}
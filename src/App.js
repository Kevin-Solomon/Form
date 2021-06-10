//import logo from './logo.svg';
import './App.css';
import './select file.js';
function App() {
  return (
    <div className="App">
      <div className="logo"></div>
		<div className="title">Congratulations<br/><small>Students placed!!</small>

    </div>
		
					<div className="browse1">
							<input type="file" id="file1" accept=".csv" placeholder="browse1file" hidden="hidden"  />
							<button type="button" id="custombut1">CHOOSE FILE 1</button>
							<span id="customtxt1">No file chosen, yet.</span>
					</div>
					<div className="browse2">
							<input type="file" id="file2" accept=".csv" placeholder="browse2file" hidden="hidden"  />
							<button type="button" id="custombut2">CHOOSE FILE 2</button>
							<span id="customtxt2">No file chosen, yet.</span>							
					</div>
		<button class="submit">Submit</button>
    </div>
  );
}

export default App;

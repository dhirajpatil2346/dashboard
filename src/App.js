// import logo from './logo.svg';
import './App.css';
import LineChart from './components/LineChart';
import Navbar from './components/Navbar';
import Second from './components/Second';
import Slide from './components/Slide';
import Slider from './components/Slider';
import Third from './components/Third';

function App() {
  	return (
    	<div className="App">
			<Navbar/>
			<div className="jj">
				<div className="row">
					<div className="col-lg-8">
					<LineChart/>
					</div>
					<Second/>
				</div>
			</div>
			<Third/>
		</div>

  );
}

export default App;

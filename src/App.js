import React from 'react';
import './App.css';
import DrumPad from './DrumPad';
import data from './data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'Click or Press a Key'
		};
	}

	handleDisplay = display => this.setState({ display });

	render() {
		return (
			<div id='drum-machine' className='container'>
				<div id='display'>{this.state.display}</div>
				<div id='drum-pads'>
					{data.map(d => (
						<DrumPad
							key={d.id}
							id={d.id}
							letter={d.letter}
							src={d.src}
							handleDisplay={this.handleDisplay}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;

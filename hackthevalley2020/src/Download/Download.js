import './Download.css';

import React, {Component} from 'react';

class Download extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: []
		};
	}
	handleChange(files) {
		this.setState({
			files: files
		});
	}
	render() {
		return (
			<div className="dropContainer">
				<DropzoneArea onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}

export default Download;

import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Button } from "@material-ui/core";
import "./Upload.css";

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			button: true
		};
	}
	// adding files
	handleChange(files) {
		this.setState({
			files: files,
			button: false
		});
	}
	// upload to analyze
	upload() {
		console.log(this.state.files[0])
	}

	render() {
		return (
			<div className="dropContainer">
				<DropzoneArea onChange={this.handleChange.bind(this)} />
				<Button disabled={this.state.button} onClick={this.upload.bind(this)}>Upload</Button>
			</div>
		);
	}
}

export default Upload;

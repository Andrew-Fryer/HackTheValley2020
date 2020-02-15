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
	handleChange(files) {
		this.setState({
			files: files,
			button: false
		});
	}
	render() {
		return (
			<div className="dropContainer">
				<DropzoneArea onChange={this.handleChange.bind(this)} />
				<Button disabled = {this.state.button}>Download</Button>
			</div>
		);
	}
}

export default Upload;

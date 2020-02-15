import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";
import { Button } from "@material-ui/core";
// import {FormData} from
// import axios from "axios";
import "./Upload.css";

class Upload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			selectedfile: "",
			button: true
		};
	}
	// adding files
	handleChange(files) {
		this.setState({
			files: files,
			selectedfile: files[0],
			button: false
		});
	}
	// upload to analyze
	upload() {
		const data = new FormData();
		data.append("file", this.state.selectedfile);
		fetch("http://localhost:5000", {
			method: "POST", // or 'PUT'
			// headers: {
			// 	// "Content-Type": "application/json"

			// 	"Access-Control-Allow-Origin": "*",
			// 	"Access-Control-Allow-Methods":
			// 		"GET,PUT,POST,DELETE,PATCH,OPTIONS"
			// },
			body: data,
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
		
		console.log(this.state.files[0]);
	}

	render() {
		return (
			<div className="dropContainer">
				<DropzoneArea acceptedFiles={[]} onChange={this.handleChange.bind(this)} />
				<Button
					disabled={this.state.button}
					onClick={this.upload.bind(this)}
				>
					Upload
				</Button>
			</div>
		);
	}
}

export default Upload;

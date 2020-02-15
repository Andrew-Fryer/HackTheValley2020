import "./Banner.css";

import React, { Component } from "react";
import { Card, CardHeader } from "@material-ui/core";

class Banner extends Component {
	// constructor(props) {
	//   super(props);
	// }
	render() {
		return (
			<Card className="banner">
				<CardHeader
					title="Hack the Valley 2020"
					subheader="By Andrew Fryer, Nathan Lai and Jamie Won"
				/>
			</Card>
		);
	}
}

export default Banner;

import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div
				style={{
					margin: "0 auto",
					textAlign: "center",
					height: "40px",
					backgroundColor: "#5cb695",
					color: 'white',
				}}
			>
				<div style={{ textAlign: 'center', paddingBottom: '20px', paddingTop: '20px', backgroundColor: "#5cb695"}}>
					<p style={{fontSize: '10px'}}>@Copyright 2019 Thyme Out Inc All Rights Reserved</p>
				</div>
			</div>
		);
	}
}

export default Footer;

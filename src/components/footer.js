import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div
				style={{
					margin: "0 auto",
					textAlign: "center",
					height: "200px",
					backgroundColor: "#354151",
					color: 'white',
					width: "1600px"
				}}
			>
				<div style={{ overflow: "hidden", width: "600px", margin: "0 auto" }}>
					<div className="contact-div" style={{ float: "left" }}>
						<h1>Contact Us</h1>
						<h5>Address: 12 Thyme Street</h5>
						<h5>Thymeland</h5>
						<h5>121212</h5>
					</div>
					<div className="about-div" style={{ float: "right", width: "300px" }}>
						<h1>About Us</h1>
						<h5>
							Kimai is a time-tracking app with a long history. Its first
							version was released more than 10 years ago. Why do we mention
							that? Because we have seen so many services come and go in the
							last decade - trust us when we say: we’ll stick around. We never
							made a living from Kimai, it’s the fun that keeps us motivated to
							improve Kimai. We believe that’s one of the main reasons for
							Kimai’s success.
						</h5>
					</div>
				</div>
			</div>

			// <Grid style={{textAlign: 'center', background: '#DDDD', height: '300px'}}>
			// 	<Grid.Row>
			// 		<Grid.Column>
			// 			<h1>Contact Us</h1>
			// 		</Grid.Column>
			// 		<Grid.Column>
			// 			<h1>About Us</h1>
			// 		</Grid.Column>
			// 	</Grid.Row>
			// </Grid>
		);
	}
}

export default Footer;

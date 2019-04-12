import React, { Component } from "react";
import { Button, Grid, Menu, Sidebar } from "semantic-ui-react";
import { IoIosMenu, IoIosTimer, IoIosStats, IoIosDocument } from "react-icons/io";
import logo from "../image/image.png";
import { Link } from "react-router-dom";

class Menubar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}
	handleHideClick = () => this.setState({ visible: false });
	handleShowClick = () => this.setState({ visible: true });
	handleSidebarHide = () => this.setState({ visible: false });

	render() {
		const { visible } = this.state;

		return (
			<Grid columns={2} style={{ background: "#354152" }}>
				<Grid.Column style={{ background: "#5bb695", width: "60px", height: "inherit"}}>
					<Button
						id="menuicon"
						disabled={visible}
						onClick={this.handleShowClick}
						style={{ background: "#5bb695", padding: 0, marginLeft: 7 }}
					>
						<IoIosMenu size={30} />
					</Button>
				</Grid.Column>
				<Sidebar
					as={Menu}
					inverted
					onHide={() => {
						this.handleSidebarHide();
					}}
					vertical
					visible={visible}
					style={{
						background: "#46b395",
						width: "300px"
					}}
				>
					<div className="form">
						<img
							src={logo}
							alt="logo"
							style={{
								marginLeft: "27px",
								paddingTop: "20px",
								marginBottom: "25px",
								width: "207px",
								height: "135px"
							}}
						/>
					</div>

					<Menu.Item
						as={ Link }
						to='/'
						style={{
							background: "#dbdbdf",
							marginBottom: "1px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							verticalAlign: "middle",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosTimer
							size={30}
							style={{
								paddingBottom: "3px",
								float: "left",
								marginLeft: "15px",
								marginRight: "15px"
							}}
						/>
						Activity Timer
					</Menu.Item>
					<Menu.Item
						as={ Link }
						to='/Test'
						style={{
							background: "#dbdbdf",
							marginBottom: "1px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosStats
							size={30}
							style={{
								paddingBottom: "3px",
								float: "left",
								marginLeft: "15px",
								marginRight: "15px"
							}}
						/>
						Dashboard
					</Menu.Item>
					<Menu.Item
						className="item"
						as="a"
						style={{
							background: "#dbdbdf",
							marginBottom: "1px",
							height: "60px",
							marginLeft: "2%",
							width: "96%",
							verticalAlign: "middle",
							color: "#354151",
							fontSize: "20px"
						}}
					>
						<IoIosDocument
							size={30}
							style={{
								paddingBottom: "3px",
								float: "left",
								marginLeft: "15px",
								marginRight: "15px"
							}}
						/>
						Reports
					</Menu.Item>
				</Sidebar>
			</Grid>
		);
	}
}

export default Menubar;

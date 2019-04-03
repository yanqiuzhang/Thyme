import React, { Component } from 'react';
import { Button, Grid, Menu, Sidebar } from 'semantic-ui-react';
import { IoIosMenu } from 'react-icons/io';
import logo from './image/image.png'


class App extends Component {
	state = {
		logCount: 0,
	}

	handleHideClick = () => this.setState({ visible: false })
	handleShowClick = () => this.setState({ visible: true })
	handleSidebarHide = () => this.setState({ visible: false })

	updateLog = eventName => () =>
		this.setState({
			logCount: this.state.logCount + 1,
		})

	render() {
		const { visible } = this.state

		return (
			<Grid columns={2}>
				<Grid.Column style={{background: "#5bb695", width: "90px", height: "1200px"}}>
					<Button disabled={visible} onClick={this.handleShowClick} style={{background: "#5bb695"}}>
						<IoIosMenu size={30}/>
					</Button>
				</Grid.Column>
				<Sidebar
					as={Menu}
					// animation='overlay'
					// icon='labeled'
					inverted
					onHide={() => {
						this.handleSidebarHide()
						this.updateLog('onHide')()
					}}
					onShow={this.updateLog('onShow')}
					onVisible={this.updateLog('onVisible')}
					vertical
					visible={visible}
					style={{
						background: '#46b395',
						width: '300px'
					}}
				>
					<div className="form">
						<img src={logo} alt="logo" style={{ paddingTop: '20px', marginBottom: '25px', width: '207px', height: '135px' }} />
					</div>
					<Menu.Item className="item" as='a' style={{ background: '#dbdbdf', marginBottom: '10px' }}>Tab1</Menu.Item>
					<Menu.Item as='a' style={{ background: '#dbdbdf', marginBottom: '10px' }}>Tab2</Menu.Item>
					<Menu.Item as='a' style={{ background: '#dbdbdf', marginBottom: '10px' }}>Tab3</Menu.Item>
					<Menu.Item as='a' style={{ background: '#dbdbdf', marginBottom: '10px' }}>Tab4</Menu.Item>
					<Menu.Item as='a' style={{ background: '#dbdbdf', marginBottom: '10px' }}>Tab5</Menu.Item>
				</Sidebar>
			</Grid>
		)
	}
}

export default App;

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
				<Grid.Column>
					<Button disabled={visible} onClick={this.handleShowClick}>
						<IoIosMenu />
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
							background:'#46b395',
							width:'250px' 
						}}
					>
					  <img src={logo} alt="logo" style={{paddingTop: '20px', width: '207px', height: '135px'}} />
						<Menu.Item as='a'>Tab1</Menu.Item>
						<Menu.Item as='a'>Tab2</Menu.Item>
						<Menu.Item as='a'>Tab3</Menu.Item>
					</Sidebar>
			</Grid>
		)
	}
}

export default App;

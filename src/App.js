import React, { Component } from 'react'
import { Button, Grid, Header, Image, Label, Menu, Segment, Sidebar } from 'semantic-ui-react'

class App extends Component {
	state = {
		logCount: 0,
	}

	clearLog = () => this.setState({ logCount: 0 })

	handleHideClick = () => this.setState({ visible: false })
	handleShowClick = () => this.setState({ visible: true })
	handleSidebarHide = () => this.setState({ visible: false })

	updateLog = eventName => () =>
		this.setState({
			logCount: this.state.logCount + 1,
		})

	render() {
		const { logCount, visible } = this.state

		return (
			<Grid columns={2}>
				<Grid.Column>
					<Button.Group>
						<Button disabled={visible} onClick={this.handleShowClick}>
							Show sidebar
              </Button>
						<Button disabled={!visible} onClick={this.handleHideClick}>
							Hide sidebar
              </Button>
					</Button.Group>
				</Grid.Column>
				<Grid.Column>
					<Sidebar
						as={Menu}
						animation='overlay'
						icon='labeled'
						inverted
						onHidden={this.updateLog('onHidden')}
						onHide={() => {
							this.handleSidebarHide()
							this.updateLog('onHide')()
						}}
						onShow={this.updateLog('onShow')}
						onVisible={this.updateLog('onVisible')}
						vertical
						visible={visible}
						width='70px'
					>
					<h1>thyme productivity tracker</h1>
						<Menu.Item as='a'>Tab1</Menu.Item>
						<Menu.Item as='a'>Tab2</Menu.Item>
						<Menu.Item as='a'>Tab3</Menu.Item>
					</Sidebar>
				</Grid.Column>
			</Grid>
		)
	}
}

export default App;

import React, { Component } from 'react'
import Menubar from './Menubar'
import Footer from './footer'

export default class Test extends Component {
	render() {
		return (
			<div>
				<Menubar />
				<h1>Hello</h1>
					<Footer />
			</div>
		)
	}
}

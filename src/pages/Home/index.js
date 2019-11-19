import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

const Link1 = React.forwardRef((props, ref) => (
	<Link innerRef={ref} {...props} />
))

const Home = () => {
	return (
		<div>
			<Button component={Link1} to='/favorites'>
				With prop forwarding
			</Button>
			<h1>Home</h1>
		</div>
	)
}

export default Home

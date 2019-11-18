import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	switcher: {
		flexGrow: 1
	}
}))

const HeaderContainer = () => {
	const classes = useStyles()
	const [auth, setAuth] = React.useState(true)

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<MenuIcon />
					</IconButton>
					<FormGroup className={classes.switcher}>
						<FormControlLabel
							control={<Switch aria-label='login switch' />}
							label={auth ? 'Dark Theme' : 'Light Theme'}
						/>
					</FormGroup>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default HeaderContainer

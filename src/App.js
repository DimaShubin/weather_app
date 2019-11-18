import React from 'react'
import {ThemeProvider} from '@material-ui/core/styles'
import './App.css'
import Main from './pages/Routes'
import Header from './components/layout/Header/Header'

function App() {
	const theme = {
		// palette: {
		// 	type: prefersDarkMode ? 'dark' : 'light'
		// }
	}
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Main />
		</ThemeProvider>
	)
}

export default App

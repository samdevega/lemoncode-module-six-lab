import * as React from 'react'
import { useHistory } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Home from '@material-ui/icons/Home'
import * as classes from './app.layout.styles'

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props
  const history = useHistory()
  const handleOnClick = () => {
    history.push(`/`)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu" onClick={handleOnClick}>
            <Home /> <strong style={{ display: 'inline-block', marginLeft: '0.5rem' }}>Rick & Morty Wiki</strong>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  )
}

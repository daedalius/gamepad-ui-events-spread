import * as React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { GamepadInputLayer } from '#components/GamepadInputLayer'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export function Header() {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Site name
        </Typography>
        <GamepadInputLayer name="headerAction1">
          <Button color="inherit">Header action 1</Button>
        </GamepadInputLayer>
        <GamepadInputLayer name="headerAction2">
          <Button color="inherit">Header action 2</Button>
        </GamepadInputLayer>
        <GamepadInputLayer name="headerAction3">
          <Button color="inherit">Header action 3</Button>
        </GamepadInputLayer>
      </Toolbar>
    </AppBar>
  )
}

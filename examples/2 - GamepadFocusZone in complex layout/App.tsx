import * as React from 'react'

import { Header } from './components/Header'
import { TextContent } from './components/TextContent'
import { DialogWithButton } from './components/DialogWithButton'

import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export function Application() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <CssBaseline />
      <Container maxWidth="sm">
        <TextContent />
        <DialogWithButton />
      </Container>
    </div>
  )
}

import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Switch, Route } from 'wouter'
import loadable from '@loadable/component'
import { AppBar } from './components/modules/app-bar'
import { GlobalStyles } from './components/abstracts/global-styles'
import { ErrorBoundary } from './components/abstracts/error-boundary'

const Home = loadable(() => import(/* webpackPreload: true */ './pages/home'))
const Reddit = loadable(() => import(/* webpackPreload: true */ './pages/reddit'))
const Todo = loadable(() => import(/* webpackPreload: true */ './pages/todo'))

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <ErrorBoundary>
        <AppBar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/reddit" component={Reddit} />
          <Route path="/todo" component={Todo} />
        </Switch>
      </ErrorBoundary>
    </Fragment>
  )
}

render(<App />, document.querySelector('#root'))

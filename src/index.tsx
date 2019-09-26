import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import { AppBar } from './components/modules/app-bar'
import { GlobalStyles } from './components/abstracts/global-styles'
import { ErrorBoundary } from './components/abstracts/error-boundary'

const Home = loadable(() => import(/* webpackPreload: true */ './pages/home'))
const Reddit = loadable(() => import(/* webpackPreload: true */ './pages/reddit'))
const Todo = loadable(() => import(/* webpackPreload: true */ './pages/todo'))

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <ErrorBoundary>
        <BrowserRouter>
          <AppBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/reddit" component={Reddit} />
            <Route exact path="/todo" component={Todo} />
          </Switch>
        </BrowserRouter>
      </ErrorBoundary>
    </Fragment>
  )
}

render(<App />, document.querySelector('#root'))

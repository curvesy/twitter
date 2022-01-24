import React from 'react'
import FormPage from '../pages/formPage'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from '../routes'
import Navbar from '../components/navbar/index'
import Home from '../pages/home'

const App = () => {
  const pathname = window.location.pathname

  return (
    <BrowserRouter>
      {/* {pathname == '/form' ? '' : <Route component={Navbar} />} */}
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/form" component={FormPage} exact={false} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

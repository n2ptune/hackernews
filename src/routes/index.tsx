import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../views/Main'
// import Top from '../views/Top'
// import Best from '../views/Best'
// import Ask from '../views/Ask'
// import Job from '../views/Job'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      {/* <Route path="/top" component={Top} />
      <Route path="/best" component={Best} />
      <Route path="/ask" component={Ask} />
      <Route path="/job" component={Job} /> */}
    </Switch>
  </BrowserRouter>
)

export default Router

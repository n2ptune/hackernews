import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Container from '../components/Container'
import Main from '../views/Main'
import Top from '../views/Top'
// import Best from '../views/Best'
// import Ask from '../views/Ask'
// import Job from '../views/Job'
// import Show from '../views/Show'

const Router: React.FC = ({ children }) => (
  <BrowserRouter>
    {children}
    <Switch>
      <Container>
        <Route path="/" exact component={Main} />
        <Route path="/top" component={Top} />
        {/* <Route path="/top/:id" exact component={Top} /> */}
        {/* <Route path="/best" component={Best} />
      <Route path="/ask" component={Ask} />
      <Route path="/job" component={Job} /> */}
      </Container>
    </Switch>
  </BrowserRouter>
)

interface TypeRoute {
  path: string
  name: string
  component?: React.FC
  exact?: boolean
}

const routes: TypeRoute[] = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    exact: true
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/best',
    name: 'Best'
  },
  {
    path: '/ask',
    name: 'Ask'
  },
  {
    path: '/job',
    name: 'Job'
  },
  {
    path: '/show',
    name: 'Show'
  }
]

export type { TypeRoute }

export { routes }

export default Router

import React from 'react'
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom'
import HomeIndex from './home'
import BlogIndex from './blog'
import ResumeIndex from './resume'
import UserIndex from './user'
import SliderMenu from "./layout/SlideMenu"
import NavigationBar from "./layout/NavigationBar"
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div class="app-container">
          <NavigationBar />
          <div class="app-content">
            <SliderMenu />
            <div class="container">
              <Switch>
                <Route exact path="/" component={HomeIndex} />
                <Route exact path="/resume" component={BlogIndex} />
                <Route path="/blog" component={ResumeIndex} />
                <Route path="/user" component={UserIndex} />
              </Switch>
            </div>
          </div>
        </div>
        
      </BrowserRouter>
    )
  }
}

export default AppRouter
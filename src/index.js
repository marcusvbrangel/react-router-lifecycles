import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

//import components...
import Header from './components/Header'
import Home from './components/home'
import Profile from './components/profile'
import Posts from './components/posts'

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' exact component={Home} />
                <Route path='/posts' component={Posts} />
                <Route path='/profile' component={Profile} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))



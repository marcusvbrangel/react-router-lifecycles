import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'  // -> http://localhost:3000/posts/3/netmarvin
//import { HashRouter, Route } from 'react-router-dom'      -> http://localhost:3000/#/posts/564/netmarvin
//import { MemoryRouter, Route, Redirect } from 'react-router-dom'    -> sempre  http://localhost:3000/

//import components...
import Header from './header'
import Home from './home'
import Profile from './profile'
import Posts from './posts'
import PostItem from './post-item'
import Life from './life-cycles'

const Rotas = () => {
	return ( 
		<BrowserRouter>
			<div>
				<Header />
				    <Route path="/" exact component={Home} />
				    <Route path="/posts" exact component={Posts} />
				    <Route path="/posts/:id/:user" component={PostItem} />
                    <Route path="/profile" component={Profile} />                    
                    <Route path="/life" component={Life} />
			</div>
		</BrowserRouter>
	)
}

export default Rotas

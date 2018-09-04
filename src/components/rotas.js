import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'  // -> http://localhost:3000/posts/3/netmarvin
//import { HashRouter, Route } from 'react-router-dom'      -> http://localhost:3000/#/posts/564/netmarvin
//import { MemoryRouter, Route } from 'react-router-dom'    -> sempre  http://localhost:3000/

//import components...
import Header from './header'
import Home from './home'
import Profile from './profile'
import Posts from './posts'
import PostItem from './post-item'

const Rotas = () => {
	return ( 
		<BrowserRouter>
			<div>
				<Header />
				    <Route path="/" exact component={Home} />
				    <Route path="/posts" exact component={Posts} />
				    <Route path="/posts/:id/:user" component={PostItem} />
				    <Route path="/profile" component={Profile} />
			</div>
		</BrowserRouter>
	)
}

export default Rotas

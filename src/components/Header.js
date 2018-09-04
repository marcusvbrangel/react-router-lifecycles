import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

// myapp.com/posts
// myapp.com/profile/posts

const Header = () => {
	return (
		<header>
			<h1>Header</h1>
			<hr />
			<div>
				
				<Link to="/">Home (Link)</Link>&nbsp;&nbsp;&nbsp;
				<Link to="/posts">Posts (Link)</Link>&nbsp;&nbsp;&nbsp;
				<Link to="/profile">Profile (Link)</Link>&nbsp;&nbsp;&nbsp;
				<Link to={{ 
					pathname:'/profile',
					//hash:'#francis'   ,
					search:'?profile=true'
				}}>Profile Search (Link)</Link>&nbsp;

				&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&nbsp;&nbsp;&nbsp;
				

				<NavLink to="/">Home (NavLink)</NavLink>&nbsp;&nbsp;&nbsp;
				<NavLink to="/posts"   activeStyle={{color:'red'}}>Posts (NavLink)</NavLink>&nbsp;&nbsp;&nbsp;
                <NavLink to="/profile" activeClassName='selected'>Profile (NavLink)</NavLink>&nbsp;&nbsp;&nbsp;
                <NavLink to={{ 
                    pathname:'/profile',
                    //hash:'#francis'   ,
                    search:'?profile=true'
				}}>Profile Search (NavLink)</NavLink>

			</div>
			<hr />
		</header>
	);
};

export default Header;

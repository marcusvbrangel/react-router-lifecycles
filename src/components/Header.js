import React from 'react';
import { Link } from 'react-router-dom';

// myapp.com/posts
// myapp.com/profile/posts

const Header = () => {
	return (
		<header>
			<h1>Header</h1>
			<hr />
			<div>
				<Link to="/">Home</Link>&nbsp;&nbsp;
				<Link to="/posts">Posts</Link>&nbsp;&nbsp;
                <Link to="/profile">Profile</Link>&nbsp;&nbsp;
                <Link to={{ 
                    pathname:'/profile',
                    //hash:'#francis'   ,
                    search:'?profile=true'
                }}>Profile Search</Link>
			</div>
			<hr />
		</header>
	);
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ target }) => {
	return (
		<nav id='navbar'>
			<div className='container'>
				<h1 className='logo'>
					<Link to='/'>Haozhe Zhang</Link>
				</h1>
				<ul>
					<li>
						{target === 'Home' ? (
							<Link className='current' to='/'>
								Home
							</Link>
						) : (
							<Link to='/'>Home</Link>
						)}
					</li>
					<li>
						{target === 'About' ? (
							<Link className='current' to='/about'>
								About
							</Link>
						) : (
							<Link to='/about'>About</Link>
						)}
					</li>
					<li>
						{target === 'Projects' ? (
							<Link className='current' to='/projects'>
								Projects
							</Link>
						) : (
							<Link to='/projects'>Projects</Link>
						)}
					</li>
					<li>
						{target === 'Resume' ? (
							<Link className='current' to='/resume'>
								Resume
							</Link>
						) : (
							<Link to='/resume'>Resume</Link>
						)}
					</li>
					<li>
						{target === 'Contact' ? (
							<Link className='current' to='/contact'>
								Contact
							</Link>
						) : (
							<Link to='/contact'>Contact</Link>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBox from '../components/ProjectBox';
import Footer from '../components/Footer';
import projectList from '../config/projectList';

const Projects = () => {
	return (
		<section className='projects'>
			<header>
				<nav id='navbar'>
					<div className='container'>
						<h1 className='logo'>
							<Link to='/'>Haozhe Zhang</Link>
						</h1>
						<ul>
							<li>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link className='current' to='/projects'>
									Projects
								</Link>
							</li>
							<li>
								<Link to='/resume'>Resume</Link>
							</li>
							<li>
								<Link to='contact'>Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<div
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					flex: 1,
					textAlign: 'center',
					wordWrap: 'normal',
				}}
			>
				<section id='projects-info' className='bg-light py-3'>
					<div className='container'>
						{projectList.map((project) => (
							<ProjectBox key={project._name} project={project} />
						))}
					</div>
				</section>
			</div>
			<Footer />
		</section>
	);
};

export default Projects;

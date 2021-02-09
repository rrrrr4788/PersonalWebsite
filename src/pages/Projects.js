import React from 'react';
import Navbar from '../components/Navbar';
import ProjectBox from '../components/ProjectBox';
import Footer from '../components/Footer';

// Basic imports

import projectList from '../config/projectList';

// List of projects

const Projects = () => {
	return (
		<section className='projects'>
			<header>
				<Navbar target='Projects' />
			</header>
			<section id='projects-info' className='bg-light py-3'>
				<div className='container'>
					{projectList.map((project) => (
						<ProjectBox key={project._name} project={project} />
					))}
				</div>
			</section>
			<Footer />
		</section>
	);
};

export default Projects;

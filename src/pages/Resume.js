import React from 'react';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import Footer from '../components/Footer';

import resume from '../resume/Resume-ISOM v2.pdf';

const Resume = () => {
	return (
		<section className='about'>
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
								<Link to='/projects'>Projects</Link>
							</li>
							<li>
								<Link className='current' to='/resume'>
									Resume
								</Link>
							</li>
							<li>
								<Link to='contact'>Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<div style={{ backgroundColor: '#ccc' }}>
				<div className='container'>
					<div id='resume'>
						<Document
							file={resume}
							onLoadError={console.error}
							options={{ workerSrc: 'pdf.worker.js' }}
							className='resume'
						>
							<Page
								renderMode='svg'
								pageNumber={1}
								scale={1.7}
							></Page>
						</Document>
					</div>
				</div>
			</div>

			<Footer />
		</section>
	);
};

export default Resume;
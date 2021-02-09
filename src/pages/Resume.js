import React from 'react';
import { Document, Page } from 'react-pdf';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Basic imports

import resume from '../resume/Resume-ISOM v2.pdf';

// Resume asset

const Resume = () => {
	return (
		<section className='about'>
			<header>
				<Navbar target='Resume' />
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

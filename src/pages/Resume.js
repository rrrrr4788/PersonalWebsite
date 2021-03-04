import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Basic imports

import resume from '../resume/Resume-MSM.pdf';

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
						<p className='warning'>
							Sorry, resume display is not supported on mobile
							devices or under small view width.
						</p>
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

export default connect(null, null)(Resume);

import React from 'react';

const ProjectBox = ({
	project: { img, alt, _name, intro, link, techStack },
}) => {
	return (
		<div className='project-box'>
			<img src={img} alt={alt} id='cover' />
			<h4>{_name}</h4>
			<p>{intro}</p>
			<div className='techStack'>
				{techStack.map((tech) => (
					<img
						src={tech[0]}
						alt={tech[1]}
						id='tech'
						key={tech[1]}
					></img>
				))}
			</div>
			<div id='bottom'>
				<a className='btn btn-primary' href={link}>
					View
				</a>
			</div>
		</div>
	);
};

export default ProjectBox;

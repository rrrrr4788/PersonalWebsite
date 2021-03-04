import React from 'react';

const ProjectBox = ({
	project: { img, alt, _name, intro, link, techStack },
}) => {
	return (
		<div id='project-box'>
			<img src={img} alt={alt} className='cover' />
			<h4>{_name}</h4>
			<p>{intro}</p>

			<div>
				{techStack.map((tech) => (
					<img
						src={tech[0]}
						alt={tech[1]}
						className='tech'
						key={tech[1]}
					></img>
				))}
			</div>
			<div className='bottom'>
				<a className='btn btn-primary' href={link}>
					View
				</a>
			</div>
		</div>
	);
};

export default ProjectBox;

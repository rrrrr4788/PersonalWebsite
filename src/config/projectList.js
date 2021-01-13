import InMotion from '../img/InMotion.jpg';
import Humming from '../img/humming.png';
import python from '../img/Python.png';
import js from '../img/JS.png';
import node from '../img/node.png';
import express from '../img/express.png';
import css from '../img/css.png';
import html from '../img/html.png';
import firebase from '../img/firebase.png';
import mongo from '../img/mongo.png';
import react from '../img/react.png';
import mc from '../img/mc.jpg';
import unity from '../img/unity.png';
import WasteVR from '../img/wastevr.png';
import sql from '../img/sql.png';
import code from '../img/codeicon.png';
import kivy from '../img/kivy.png';
import cpp from '../img/C++.png';
import mvw from '../img/MvW_Menu.jpg';

const projectList = [
	{
		img: InMotion,
		alt: 'InMotion',
		_name: 'InMotion',
		intro:
			'A real-time web application that analyzes human facial expressions, sorts the emotion data into 7 categories, and displays the data with a visual diagram.',
		link: 'https://inmotional.herokuapp.com/',
		techStack: [
			[js, 'JavaScript'],
			[html, 'HTML5'],
			[css, 'CSS3'],
			[node, 'NodeJS'],
			[express, 'ExpressJS'],
			[mongo, 'MongoDB'],
			[firebase, 'FireBase'],
		],
	},
	{
		img: kivy,
		alt: 'Poppy',
		_name: 'Poppy',
		intro:
			'An Android application that reads medicine instructions and reminds users to take medicines. Implemented with Kivy and an OCR module on a backend server.',
		link: 'https://github.com/lucasbsanders/poppy',
		techStack: [
			[python, 'Python'],
			[kivy, 'Kivy'],
			[sql, 'SQL'],
		],
	},
	{
		img: Humming,
		alt: 'Humming',
		_name: 'Humming',
		intro:
			'An Android application that provides users instant delivery services via drones and robots within San Fransisco (simulation) in the Agile development pattern.',
		link: 'https://github.com/lucasbsanders/poppy',
		techStack: [
			[react, 'React Native'],
			[firebase, 'Firebase'],
			[js, 'JavaScript'],
			[css, 'CSS3'],
		],
	},
	{
		img: code,
		alt: 'DevConnector',
		_name: 'DevConnector',
		intro:
			'A MERN stack social network media application that includes user authentication, profiles, and forum posts. Integrated with an extensive backend API and Redux.',
		link: 'https://devconn-mern.herokuapp.com/',
		techStack: [
			[react, 'React'],
			[js, 'JavaScript'],
			[html, 'HTML5'],
			[css, 'CSS3'],
			[node, 'NodeJS'],
			[express, 'ExpressJS'],
			[mongo, 'MongoDB'],
		],
	},
	{
		img: WasteVR,
		alt: 'Waste VR',
		_name: 'Waste VR',
		intro:
			'A Virtual Reality application and a series of learning modules with Unity, targeted to the general public for education on recycling methods. Participated via UF IPPD.',
		link:
			'https://www.ippd.ufl.edu/projects/2019-20-projects/ptp-strategy/',
		techStack: [[unity, 'Unity']],
	},
	{
		img: mc,
		alt: 'MineTest',
		_name: 'MineTest',
		intro:
			'A open-source voxel game engine with easy modding and game creation. Helped investigate how to speed up the build process and generate correct WASM outputs.',
		link: 'https://github.com/cacticouncil/minetest',
		techStack: [
			[cpp, 'C++'],
			[js, 'JavaScript'],
		],
	},
	{
		img: mvw,
		alt: 'Marston vs West',
		_name: 'Marston vs West',
		intro:
			'A simple smash bros inspired 2D video game project about the ongoing debate for best library at UF. Developed with JavaScript and Phaser.js.',
		link: 'https://github.com/ufosc/marston-vs-west/tree/master',
		techStack: [[js, 'JavaScript']],
	},
];

export default projectList;

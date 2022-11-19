import React from "react"
import "../components/index.css"
import Layout from "../components/layout"
import BkgImage from "../components/leaderBkgImage"
import Image from "../components/image"
import projectList from "../components/projects.json";
import ProjectItem from "../components/projectItem";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function IndexPage() {
	return (
		<Layout>
			<section>
				<BkgImage className='parallax module parallax-1'>
					<h1 tabIndex="0" id="aboutMe" style={{
						marginLeft: '50px',
					}}>
						mcgnly
					</h1>
				</BkgImage>
			</section>

			<section className="module content about">
				<div className="container">
					<h2 tabIndex="0">About Me</h2>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
					}}>
						<Image />
					</div>
					<p tabIndex="0">
						Hi! I'm Katie, a fullstack developer located in Berlin, Germany. I particularly like working in javascript, especially react and express, as well as python. I have a past as a mechanical engineer, and a passion for building things, solving problems, travel, and learning languages... I have studied 8 different languages so far! I also enjoy building performant websites for language schools to increase their reach and enrollment, and I like making silly projects in my free time. You can read a bit more about those below...
			</p>
				</div>
			</section>

			<section className="module parallax parallax-2">
				<div className="container">
					<h1 tabIndex="0" id="work">Work</h1>
				</div>
			</section>

			<section className="module content projects">
				<div className="container">
					<h2 tabIndex="0">Here you can read about a few of my projects so far, both at work and for fun.</h2>
					<ul>
						{projectList.map((item) => (
							<ProjectItem title={item.title} content={item.content} link={item.link} />
						))}
					</ul>
				</div>
			</section>

			<section className="module parallax parallax-3">
				<div className="container">
					<h1 tabIndex="0" id="contact">Contact</h1>
				</div>
			</section>

			<section className="module content">
				<div className="container">
					<h2 tabIndex="0">Contact Me:</h2>
					<ul tabIndex="0" className="contact flex">
						<li>
							<a className="contactInfo" href="https://github.com/mcgnly" target="_blank" title="See some things I made for the internet"><FontAwesomeIcon size='2x' icon={faGithubSquare} /></a>
						</li>
						<li>
							<a className="contactInfo" href="https://www.linkedin.com/in/mcgnly/" target="_blank" title="Drop me a line if you would like to work together"><FontAwesomeIcon size='2x' icon={faLinkedin} /></a>
						</li>
						{/* <li>
							<a className="contactInfo" href="https://twitter.com/mcgnly" target="_blank" title="See some things I made for the internet"><FontAwesomeIcon size='2x' icon={faTwitterSquare} /></a>
						</li> */}
					</ul>

				</div>
			</section>
		</Layout>
	)
}

export default IndexPage

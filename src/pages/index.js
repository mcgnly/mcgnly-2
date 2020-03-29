import React, { useState } from "react"
import "../components/index.css"
import Layout from "../components/layout"
import BkgImage from "../components/leaderBkgImage"
import Image from "../components/Image"
import SEO from "../components/seo"
import projectList from "../components/projects.json";
import ProjectItem from "../components/projectItem";
import ContactForm from '../components/contactForm';

function IndexPage() {
	return (
		<Layout>
			<SEO title="Home" />
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

			<section className="module parallax parallax-4">
				<div className="container">
					<h1 tabIndex="0" id="aboutHere">This page</h1>
				</div>
			</section>

			<section className="module content">
				<div className="container">
					<h2 tabIndex="0">Notes on Design</h2>
					<p tabIndex="0">This website was made with accessibility in mind.</p>
					<ul className="accessibility">
						<li tabIndex="0">
							<p>Contrast: according to best practices set forth by WCAG AAA standard, the contrast between normal-sized text and background should be a minimum of 7:1. On this page it is 7.14:1</p>
						</li>
						<li tabIndex="0">
							<p>Colors: the palette here was kept to a relatively monochromatic scale, in order to be readable by people with different forms of color blindness, and the text is slightly darker than white in order to be more readable by people with dyslexia.</p>
						</li>
						{/* <li tabIndex="0">
						<p>Screen readers: this page is tab-through-able, and on the first tab reveals a "skip to content" button, which bypasses the navbar.</p>
					</li> */}
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
					<ul className="contact" tabIndex="0">
						<li>
							<a className="contactInfo" href="https://github.com/mcgnly" target="_blank" title="See some things I made for the internet">GitHub: mcgnly</a>
						</li>
						<li>
							<a className="contactInfo" href="https://www.linkedin.com/in/mcgnly/" target="_blank" title="Social networking for adults">Linkedin: www.linkedin.com/in/mcgnly</a>
						</li>
						<li>
							<p style={{
								color: '#efefef',
								fontFamily: 'monospace',
								fontSize: '24px',
							}}>Or write to me here!</p>
						</li>
						<ContactForm />
					</ul>
				</div>
			</section>
		</Layout>
	)
}

export default IndexPage

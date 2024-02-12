import * as React from "react"
import norwich from "../images/health_nu_screenshot.png"
import washington from "../images/online_mba_wsu_screenshot.png"
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <div className="grid grid-cols-12 mx-auto">
        <div className="col-start-2 col-span-10">
          <h1 className="text-8xl font-bold">Hi, <span className="text-accent-color">I'm Alice</span>,<br/>
          a <span className="text-accent-color">web</span> developer.</h1>

          <div className="my-16">
            <p className="text-2xl">With over 7 years of experience, I've crafted websites for embassies, consulates, and universities in Washington, DC. Specializing in front-end development, I prioritize user-friendly interfaces. Continuously improving my software development skills, I aim to deliver innovative solutions.</p>
          </div>

          <div className="my-40">
            <h2 className="text-6xl text-accent-color">My Latest Work</h2>

            <div className="grid grid-cols-12 gap-16 mx-auto my-16">
              <div className="col-span-4">
                <img src={norwich} alt="Norwich University" />
                <p className="text-center"><Link to="https://health.norwich.edu" target="_blank" className="transition hover:text-accent-color/[.75]">Norwich University 
                <svg className="stroke-1 h-8 inline pl-4 fill-accent-color transition hover:fill-accent-color/[.75]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link></p>
              </div>
              <div className="col-span-4">
                <img src={washington} alt="Washington State University" />
                <p className="text-center"><Link to="https://onlinemba.wsu.edu" target="_blank" className="transition hover:text-accent-color/[.75]">Washington State University 
                <svg className="stroke-1 h-8 inline pl-4 fill-accent-color transition hover:fill-accent-color/[.75]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></Link></p>
              </div>
            </div>
          </div>

          <div className="my-40">
            <h2 className="text-6xl text-accent-color">Contact Me</h2>
            <p className="text-2xl mb-8">You can reach out to me via:</p>

            <div className="flex gap-8">
              <Link to="https://www.linkedin.com/in/alicelly/" target="_blank">
                <svg className="h-16 transition delay-25 fill-white hover:fill-accent-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </Link>
              <Link to="mailto:hello@alicely.io">
                <svg className="h-16 transition delay-25 fill-white hover:fill-accent-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export const Head = () => <title>Alice's Web Portfolio</title>

export default IndexPage
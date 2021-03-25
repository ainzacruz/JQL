import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import janusql from '../assets/images/janusql.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Adrian from '../assets/images/adrian.png'
import Kim from '../assets/images/kim.png';
import Lucas from '../assets/images/lucas.jpeg';
import Phil from '../assets/images/phill.jpeg';
import Tammy from '../assets/images/tammy.jpg';
import GitHub from '../assets/images/Github.png'
import LinkedIn from '../assets/images/Linkedin.png'
import Gui from '../assets/gif/Gui.gif'
import Performance from '../assets/gif/Performance.gif';

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="JanusQL" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About</h2>
                </header>
                <p>
                JanusQL is an easy-to-use Electron powered GUI for GraphQL API security and performance testing. It allows users to test the performance of their GraphQL API by displaying a query's response time, throughput, and average response time per a given load. It can also test if their GraphQL API is protected against DDOS attacks. Users can keep track of all analytics ran while exploring the API by sending it different kinds of data to see what values are returned. <br></br><br></br>
                Users can keep track of all analytics ran while exploring the API by sending it different kinds of data to see what values are returned. <br></br><br></br>
                Currently in Beta.
                </p>
                <ul className="actions">
                  <li>
                    <Link target="_blank" to="https://github.com/oslabs-beta/janusql" className="button">
                      Github
                    </Link>
                  </li>
                </ul>
              </div>
                <img class='about-img' src={janusql} alt="" />
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Main Features</h2>
              <div className="features">
              <p>
              <b>Intuitive GUI Query Editor</b>
                <br />
                <br />
                Test your GraphQL API queries. Just input your API and submit a query in the code editor workspace to test your response
              </p>
              <img className='gif' src={Gui}></img>
              </div>
              <div className="features">
                <p>
                <b>Performance Metrics</b>
                  <br />
                  <br />
                  Track crucial GraphQL API performance metrics such as response time, throughput, status, query size, and average response time per set loads
                </p>
                <img className='gif' src={Performance}></img>
              </div>
              <div className="features">
                <p>
                <b>Security Metrics</b>
                  <br />
                  <br />
                  Inspect your API’s response to common Graphql security vulnerabilities, receiving feedback and remedial recommendations should any vulnerability exist
                </p>
                <img className='gif' src={Performance}></img>
              </div>
            </header>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Our Team</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1"><img className='prof-images' src={Adrian}/></span>
                <h3>Adrian Inza-Cruz</h3>
                <div className='social-container'>
                <a target='_blank' href="https://github.com/ainzacruz"><img src={GitHub} alt="GitHub logo" width="30" height="30"></img> </a>
                <a target='_blank' href="https://www.linkedin.com/in/adrian-inza-cruz/"><img src={LinkedIn} alt="Linkedin logo" width="35" height="30"></img></a>
              </div>
              </li>
              <li>
                <span className="icon major style3"><img className='prof-images' src={Kim}/></span>
                <h3>Kim Chiu</h3>
                <div className='social-container'>
                  <a target='_blank' href="https://github.com/kimchiuu" className="text-primary-biolinks"><img src={GitHub} alt="GitHub logo" width="30" height="30"></img> </a>
                  <a target='_blank' href="https://www.linkedin.com/in/kimchiuu/"><img src={LinkedIn} alt="Linkedin logo" width="35" height="30"></img></a>
              </div>
              </li>
              <li>
                <span className="icon major style5"><img className='prof-images' src={Lucas}/></span>
                <h3>Lucas Mobley</h3>
                <div className='social-container'>
                  <a target='_blank' href="https://github.com/lucasmobley"><img src={GitHub} alt="GitHub logo" width="30" height="30"></img></a> 
                  <a target='_blank' href="https://www.linkedin.com/in/lucasmobley/"><img src={LinkedIn} alt="Linkedin logo" width="35" height="30"></img></a>
              </div>
              </li>
              <li>
                <span className="icon major style5"><img className='prof-images' src={Phil}/></span>
                <h3>Phillip Bannister</h3>
                <div className='social-container'>
                  <a target='_blank' href="https://github.com/phillipkb"><img src={GitHub} alt="GitHub logo" width="30" height="30"></img> </a> 
                  <a target='_blank' href="https://www.linkedin.com/in/phillipkekoabannister/"><img src={LinkedIn} alt="Linkedin logo" width="35" height="30"></img> </a>
              </div>
              </li>
              <li>
                <span className="icon major style5"><img className='prof-images' src={Tammy}/></span>
                <h3>Tammy Le</h3>
                <div className='social-container'>
                  <a target='_blank' href="https://github.com/letammy979"><img src={GitHub} alt="GitHub logo" width="30" height="30"></img> </a> 
                  <a target='_blank' href="https://www.linkedin.com/in/letammy/"><img src={LinkedIn} alt="Linkedin logo" width="35" height="30"></img></a>
              </div>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Get Started</h2>
              <p>
               To get started, fork and clone the app from our github.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link target="_blank" to="https://github.com/oslabs-beta/janusql" className="button special">
                    Github
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index

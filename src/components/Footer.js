import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <ul className="icons">
        <li>
          <a target="_blank"
            href="https://www.linkedin.com/company/72289872/"
            className="icon fa-linkedin alt"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a target="_blank"
            href="https://github.com/oslabs-beta/janusql"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>

      </ul>
    </section>
    <p className="copyright">
      &copy; Copyright © 2021 JanusQL. All Rights Reserved.
    </p>
  </footer>
)

export default Footer

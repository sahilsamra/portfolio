import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Pic from './sahil.jpg'

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12} tablet={8} phone={4}>
            <img
              src={Pic}
              alt="cv-cover"
              style={{ height: '250px', borderRadius: '140px', margin: '50px' }}
            />

            <div className="banner-text">
              <h1>Frontend Web Developer</h1>

              <hr />

              <p>HTML5/CSS3 | Javascript | React </p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sahil-samra-a74057209/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/sahilsamra"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Email */}
                <a
                  href="mailto:sahilsamra3@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-envelope" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing

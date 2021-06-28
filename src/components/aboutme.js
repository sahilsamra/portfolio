import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Pic from './cv.jpg'

class About extends Component {
  render() {
    return (
      <div>
        <Grid className="about-grid">
          <Cell col={4} tablet={8} phone={12}>
            <img
              src={Pic}
              alt="avatar"
              style={{ width: '250px', margin: '50px', borderRadius: '5px' }}
            />
          </Cell>
          <Cell col={6} tablet={8} phone={12}>
            <h2 style={{ paddingTop: '40px' }}>About Me</h2>
            <hr />
            <p style={{ paddingTop: '20px', margin: 'auto' }}>
              Hello I'm Sahil Samra, born and raised in India. I'm a Software Developer student at 
              Manitoba Institute of Trade and Technology, Winnipeg Manitoba. If you navigate to the "Projects"
              section of this website, you'll see some of the Frontend web work using
              HTML5/CSS3, Javascript & React. With my passion, education,
              and experience I love to develop and build websites and applications.
            </p>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About

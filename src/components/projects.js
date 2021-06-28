import React, { Component } from 'react'
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Grid>
            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 1 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/GLXAFhch.png) center ',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Winnipeg Transit</h3>
                  This app is fetching data from Winnipeg Transit API and displaying recommended trips with some alternative routes.
                   <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  
                  <Button colored href="https://ecstatic-payne-9edd03.netlify.app/" target="_blank">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 2 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/WSAwT23h.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Weather App</h3>
                  Weather web app built in Javascript. 
                  Using Open Weather API that showcase current weather. 
                  You can search weather forecast for 5 days with update 
                  every 3 hours by location.
                  <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  
                  <Button
                    colored
                    href="https://inspiring-kowalevski-b609ea.netlify.app/"
                    target="_blank"
                  >
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={6} tablet={12} phone={12} id="project-cell">
              {/* Project 3 for Javascript */}
              <Card shadow={5} id="project-card">
                <CardTitle
                  style={{
                    color: 'black',
                    height: '250px',
                    background: 'url(https://i.imgur.com/q1BQ7nQh.png) center / cover',
                  }}
                ></CardTitle>
                <CardText>
                  <h3>Next Bus</h3>

                  <br />
                  <span>
                    <i className="fab fa-html5 project-icon" aria-hidden="true" />
                    <i className="fab fa-css3-alt project-icon" aria-hidden="true" />
                    <i className="fab fa-js-square project-icon" aria-hidden="true" />
                  </span>
                </CardText>
                <CardActions border>
                  <Button colored href="https://condescending-hermann-65367c.netlify.app/" target="_blank">
                    Link
                  </Button>
                </CardActions>
              </Card>
            </Cell>            
          </Grid>
        </div>
      )
    
    } else{
      return (
        <div className="projects-grid">
          <Grid>
          <Cell col={6} tablet={12} phone={12} id="project-cell">
              <Card shadow={5} id="project-card">
                <CardText>
                  <span>coming soon</span>
                </CardText>
              </Card>
            </Cell>            
          </Grid>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
        </Tabs>

        <div className="content">{this.toggleCategories()}</div>
      </div>
    )
  }
}

export default Projects

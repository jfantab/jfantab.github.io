import React from 'react'
import Thumbnail from '../../components/Thumbnail'
import '../../normalize.css'
import '../../skeleton.css'
import './index.css'

import A2 from './a2.jpg'
import Graph from './graphviz.png'
import TBD from './megaphone.jpg'

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="landing-image">
        <section>
          <h1>Welcome to John's Portfolio!</h1>
          <h3>I value simplicity and directness over noise.</h3>
        </section>
      </div>
      <section className="intro flex-row">
        <div className="illustration"></div>
        <div className="intro-text flex-column">
          <h1>Who am I?</h1>
          <p>
            I began web development in the summer of 2018, teaching myself HTML, CSS, and Javascript. Later on, I moved
            to learning Vue.js and Typescript.
          </p>
          <p>I have a passion for designing aesthetic user interfaces with eye-catching interactivity.</p>
        </div>
      </section>
      <section className="projects flex-column">
        <h1>Browse through some of the projects I've been working on!</h1>
        <div className="flex-row">
          <Thumbnail
            thumbnailPropsArray={[
              {
                src: A2,
                alt: '',
                content: (
                  <React.Fragment>
                    <h1>
                      <a href="https://a2cf.net/santaclara/index.html" target="_blank" rel="noreferrer">
                        Christian Fellowship Website
                      </a>
                    </h1>
                    <p>This was my first ever web development project.</p>
                  </React.Fragment>
                ),
              },
              {
                src: Graph,
                alt: '',
                content: (
                  <React.Fragment>
                    <h1>
                      <a href="https://www.graphvizer.com" target="_blank" rel="noreferrer">
                        Graph Visualizer
                      </a>
                    </h1>
                    <p>
                      This is a collaborative web app developed to help students learn more about graphs. It won a
                      Hackathon side prize back in February.
                    </p>
                  </React.Fragment>
                ),
              },
              {
                src: TBD,
                alt: '',
                content: (
                  <React.Fragment>
                    <h1>TBD</h1>
                    <p>More amazing projects in the works!</p>
                  </React.Fragment>
                ),
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

export default App

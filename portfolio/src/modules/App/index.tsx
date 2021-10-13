import React from 'react'
import Footer from '../Footer'
import Nav from '../Nav'
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
      <Nav />
      <div className="landing-image">
        <section>
          <h1>Welcome to John's Portfolio</h1>
          <h3>Quote of the Day: Be the rock in the river that lets everything flow past it, undisturbed.</h3>
        </section>
      </div>
      <section className="projects flex-row">
        <Thumbnail
          thumbnailPropsArray={[
            {
              src: A2,
              alt: '',
              content: (
                <React.Fragment>
                  <h1>
                    <a href="https://a2cf.net/santaclara/index.html" target="_blank">
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
                    <a href="https://www.graphvizer.com" target="_blank">
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
      </section>
      <Footer />
    </div>
  )
}

export default App

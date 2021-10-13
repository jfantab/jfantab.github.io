import React from 'react'
import List from '../../components/List'
import './index.css'

const Nav: React.FunctionComponent = () => {
  return (
    <div className="navbar flex-row">
      <List
        name="flex-row"
        listPropsArray={[
          {
            href: '#',
            children: 'Home',
          },
          {
            href: '#',
            children: 'Blog',
          },
        ]}
      />
      <h1>
        <a href="#">John</a>
      </h1>
      <List
        name="flex-row"
        listPropsArray={[
          {
            href: '#',
            children: 'About Me',
          },
          {
            href: '#',
            children: 'Contact',
          },
        ]}
      />
    </div>
  )
}

export default Nav

import React from 'react'
import List from '../../components/List'
import './index.css'

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer">
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

export default Footer

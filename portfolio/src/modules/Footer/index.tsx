import React from 'react'
import List from '../../components/List'
import './index.css'

const Footer: React.FunctionComponent = () => {
  return (
    <div className="footer">
      <p>Work in progress.</p>
      <List
        name="flex-row"
        listPropsArray={[
          {
            href: 'https://www.instagram.com/jfantab/',
            children: 'Instagram',
          },
          {
            href: 'https://github.com/jfantab',
            children: 'Github',
          },
        ]}
      />
    </div>
  )
}

export default Footer

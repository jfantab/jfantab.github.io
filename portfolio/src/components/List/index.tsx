import React from 'react'
import './index.css'

interface ListProps {
  name: string
  listPropsArray: {
    name?: string
    href: string
    children: React.ReactNode
  }[]
}

const List: React.FunctionComponent<ListProps> = ({ name, listPropsArray }: ListProps) => {
  return (
    <ul className={name}>
      {listPropsArray.map((list) => (
        <li className={list.name}>
          <a href={list.href}>{list.children}</a>
        </li>
      ))}
    </ul>
  )
}

export default List

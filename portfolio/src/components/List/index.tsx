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
    <div className={name + ' nav-items'}>
      {listPropsArray.map((list) => (
        <a href={list.href}>{list.children}</a>
      ))}
    </div>
  )
}

export default List

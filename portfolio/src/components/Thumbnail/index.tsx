import React from 'react'
import './index.css'

interface ThumbnailProps {
  thumbnailPropsArray: {
    src: string
    alt: string
    content: React.ReactNode
  }[]
}

const Thumbnail: React.FunctionComponent<ThumbnailProps> = ({ thumbnailPropsArray }: ThumbnailProps) => {
  return (
    <React.Fragment>
      {thumbnailPropsArray.map((thumbnail) => (
        <div className="content-square flex-column">
          <img src={thumbnail.src} alt={thumbnail.alt} />
          <div className="content-square-description">{thumbnail.content}</div>
        </div>
      ))}
    </React.Fragment>
  )
}

export default Thumbnail

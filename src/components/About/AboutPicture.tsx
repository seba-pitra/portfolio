import React from 'react'

export const AboutPicture = ({ src }: { src: string }) => {
  return <img 
    src={src} 
    className="max-h-80 rounded-middle max-lg:max-h-60" 
    alt="profile_picture" />
}

import React from 'react'
import { IconBrandTypescript } from '@tabler/icons-react'
import { IconBrandMantine } from '@tabler/icons-react'

const iconSize = 32;
const logos = {
  "Typescript": <IconBrandTypescript size={iconSize}  />, 
  "Mantine": <IconBrandMantine size={iconSize} />,
}

const TechStackLogo = ({logoName}) => {
  return (
      <a className='tech-icon' title={logoName} >{ logos[logoName] }</a>
  )
}

export default TechStackLogo
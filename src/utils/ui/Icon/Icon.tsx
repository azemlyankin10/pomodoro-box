import React, { FC } from 'react'
import { EIcons, icons } from './icons/_index'

export { EIcons } from './icons/_index'

interface IconProps {
  name: EIcons
  size?: number
  viewBox?: string
  className?: string
  width?: string
  height?: string
}

export const Icon: FC<IconProps> = ({ name, size, viewBox = '0 0 16 16', className, width, height }) => {
  return (
    <svg className={className} width={size || width} height={size || height} viewBox={viewBox} fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      { icons[name] }
    </svg>
  )
}


import classNames from 'classnames'
import React from 'react'
import badgeStyles from './Badge.module.scss'

interface BadgeProps {
  children: React.ReactNode
}

export const Badge = ({children, ...r}: BadgeProps) => {
  const classes = classNames(badgeStyles.badge)
  return (
    <span className={classes} {...r}>{children}</span>
  )
}

export default Badge
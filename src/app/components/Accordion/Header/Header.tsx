import classNames from 'classnames'
import React, { useContext } from 'react'
import accordionStyles from '../Accordion.module.scss'
import { ArrowDown } from '../../Icons'
import { AccordionContext } from '../AccordionContext'

interface HeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode
  // handleToggle: (id: string) => void
}

export const Header = ({ children, className, /* handleToggle, */ ...r }: HeaderProps) => {
  const { id, handleToggle } = useContext(AccordionContext)

  const classes = classNames(accordionStyles['accordion-header'], className)
  return (
    <div className={classes} onClick={() => handleToggle(id)} {...r}>
      <h4>{children}</h4>
      <ArrowDown width={16} height={16} className={accordionStyles['accordion-header-icon']} />
    </div>
  )
}


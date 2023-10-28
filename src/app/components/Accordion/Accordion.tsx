import React, { useRef } from 'react'
import classNames from 'classnames'
import accordionStyles from './Accordion.module.scss'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { AccordionContext } from './AccordionContext'

export interface AccordionProps extends React.ComponentPropsWithoutRef<'div'> {
  id: string
  // header: string
  children: React.ReactNode
  isOpen?: boolean
  handleToggle: (id: string | number) => void
}

export const Accordion = ({ className, id, /* header,  */children, handleToggle, isOpen, ...r }: AccordionProps) => {
  // const accordionRef = useRef(null)
  const classes = classNames(accordionStyles.accordion, className, {
    [accordionStyles['accordion-open']]: isOpen
  })

  return (
    <AccordionContext.Provider value={{ isOpen: Boolean(isOpen), id, handleToggle }}>
      <div className={classes} {...r}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

Accordion.Header = Header
Accordion.Body = Body
import classNames from 'classnames'
import React from 'react'
import accordionStyles from '../Accordion.module.scss'

export interface BodyProps extends React.ComponentPropsWithRef<'div'> {
  items: string[] | number []
  handleClick: any
  itemsKey: string
}

export const Body = ({ handleClick, itemsKey, className, items, ...r }: BodyProps) => {
  const classes = classNames(accordionStyles['accordion-body'], className);

  return (
    <div className={classes} {...r}>
      {items?.map((item, i) => (
        <div key={i} onClick={() => handleClick({ [itemsKey]: item })}>
          <p className={accordionStyles['accordion-item']} key={i}>
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}


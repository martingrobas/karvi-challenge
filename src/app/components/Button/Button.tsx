import classNames from 'classnames'
import btnStyles from './Button.module.scss'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  iconOnly?: boolean
  children?: React.ReactNode
  buttonType: 'primary' | 'secondary' | 'link' | 'unstyled'
}

export const Button = ({ iconOnly, children, className, buttonType, title, ...r }: ButtonProps) => {
  const classes = classNames(btnStyles['button'], className,
  { [btnStyles['icon-only']]: iconOnly, [btnStyles[`${buttonType}`]]: buttonType })
  return (
    <button className={classes} {...(title && { title })} {...r}>
      {children}
    </button>
  )
}

export default Button


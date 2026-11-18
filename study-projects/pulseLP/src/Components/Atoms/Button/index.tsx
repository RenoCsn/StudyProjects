import type { ButtonType } from '../../../Utils/Types/ButtonType'
import styles from './Button.module.css'

export const ButtonComponent: React.FC<
  ButtonType & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  isAnimated = false,
  variant = 'primary',
  animationStyle = 'expand',
  children,
  ...props
}: ButtonType) => {
  const animated = isAnimated ? styles[animationStyle] : ''

  const combinedClassName = [
    styles.resetButton,
    styles.baseBtn,
    animated,
    styles[variant],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}

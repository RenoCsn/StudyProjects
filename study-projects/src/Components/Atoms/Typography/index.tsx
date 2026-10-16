import type { ElementType } from 'react'
import type { TypographyType } from '../../../Utils/Types/TypographyType'
import styles from './Typography.module.css'

export const TypographyComponent: React.FC<TypographyType> = ({
  color = 'primary',
  variant = 'p',
  children,
}: TypographyType) => {
  const Component = variant as ElementType

  const combinedClassName = [styles[variant], styles[color]]
    .filter(Boolean)
    .join(' ')

  return <Component className={combinedClassName}>{children}</Component>
}

import { ColorableBaseProps, ColorableBase } from 'comps/common';
import './paragraph.scss';

export interface ParagraphProps extends ColorableBaseProps {
  size?: string, 
  center?: boolean
}

export function Paragraph(props: ParagraphProps) {
  let className = 'Paragraph';
  if (props.className)  className += ` ${props.className}`; 
  if (props.size)       className += ` size-${props.size}`;  
  if (props.color)      className += ` color-${props.color}`;  
  if (props.center)     className += ' center';

  return (
    <ColorableBase {...props} as={'p'} className={className}>
      {props.children}
    </ColorableBase>
  )
}
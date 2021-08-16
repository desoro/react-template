import { ColorableBaseProps, ColorableBase } from 'comps/common';
import './span.scss';

export interface SpanProps extends ColorableBaseProps {
  size?: string, 
  bold?: boolean,
  upper?: boolean,
  truncate?: boolean
}

export function Span(props: SpanProps) {
  let className = 'Span';
  if (props.className)  className += ` ${props.className}`;
  if (props.size)       className += ` size-${props.size}`;
  if (props.color)      className += ` color-${props.color}`; 
  if (props.bold)       className += ' bold';
  if (props.upper)      className += ' upper';
  if (props.truncate)   className += ' truncate';

  return (
    <ColorableBase {...props} as={'span'} className={className}>
      {props.children}
    </ColorableBase>
  )  
}
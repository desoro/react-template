import { ColorableBaseProps, ColorableBase } from 'comps/common';
import './heading.scss';

export interface HeadingProps extends ColorableBaseProps {
  size?: string,
  upper?: boolean,
  smallCaps?: boolean,
  cap?: boolean,
  center?: boolean,
  truncate?: boolean,  
  btn?: boolean
}

export function Heading(props: HeadingProps) {
  let type;
  if      (props.size === 'sm')   type = 'h5';
  else if (props.size === 'lg')   type = 'h3';
  else if (props.size === 'xl')   type = 'h2';
  else if (props.size === 'xxl')  type = 'h1';
  else                            type = 'h4';

  let className = 'Heading';
  if (props.className)  className += ` ${props.className}`;
  if (props.color)      className += ` color-${props.color}`;
  if (props.upper)      className += ' upper';
  if (props.smallCaps)  className += ' small-caps';
  if (props.cap)        className += ' cap';
  if (props.center)     className += ' center';
  if (props.truncate)   className += ' truncate';
  if (props.btn)        className += ' btn';

  return (
    <ColorableBase {...props} as={type} className={className}>
      {props.children}
    </ColorableBase>
  )
}
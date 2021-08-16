import { BaseProps, BaseElement } from 'comps/common';
import './box.scss';

export interface BoxProps extends BaseProps {
  as?: any,
  row?: string | boolean,
  column?: boolean,
  center?: boolean,
  justify?: string,
  align?: string,
  grow?: boolean,
  even?: boolean,
  ml?: number,
  mr?: number,
  mt?: number,
  mb?: number,
}

export function Box(props: BoxProps) {
  const as = props.as || 'div';
  let className = 'Box';
  
  if (props.className)  className += ` ${props.className}`
  if (props.row)        className += ` row-${props.row}`; 
  if (props.column)     className += ` col-${props.column}`;  
  if (props.center)     className += ' justify-center align-center';
  if (props.align)      className += ` align-${props.align}`;  
  if (props.justify)    className += ` justify-${props.justify}`;  

  if (props.ml) className += ` ml-${props.ml}`;
  if (props.mr) className += ` mr-${props.mr}`;
  if (props.mt) className += ` mt-${props.mt}`;
  if (props.mb) className += ` mb-${props.mb}`;

  if (props.grow) className += ' grow';
  if (props.even) className += ' even';

  return (
    <BaseElement {...props} as={as} className={className}>
      {props.children}
    </BaseElement>
  )
}
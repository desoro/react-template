import React from 'react';
import { ColorableBoxProps, ColorableBox } from 'comps/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './icon.scss';

export * as IconList from './icon-list';

export interface IconProps extends ColorableBoxProps {  
  icon: any,
  size?: string,
  color?: string,
  btn?: boolean,
  hover?: boolean
}

export function Icon(props: IconProps) {
  let className = 'Icon';
  if (props.className)  className += ` ${props.className}`;
  if (props.size)       className += ` size-${props.size}`;
  if (props.color)      className += ` color-${props.color}`;
  if (props.btn)        className += ' btn';
  if (props.hover)      className += ' hover';

  return (
    <ColorableBox {...props} className={className} center>
      {props.icon.prefix !== undefined
        ? <FontAwesomeIcon icon={props.icon}/> 
        : React.createElement(props.icon)
      }
    </ColorableBox>
  );
}
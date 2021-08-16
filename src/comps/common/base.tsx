import React from 'react';

export interface BaseProps {
  as?: any,
  className?: string,  
  style?: any,
  onClick?: () => void,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void,
  children?: any,
  htmlProps?: any
}

export function BaseElement(props: BaseProps) {
  return React.createElement(props.as, {
    ...props.htmlProps,
    className: `BaseElement ${props.className}`,
    style: props.style,
    onClick: props.onClick,
    onMouseEnter: props.onMouseEnter,
    onMouseLeave: props.onMouseLeave
  },
  props.children)
}
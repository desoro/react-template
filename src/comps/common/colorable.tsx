import { BaseProps, BaseElement, BoxProps, Box } from 'comps/common';
import './colorable.scss';

export interface ColorableProps {
  color?: string,
  backgroundColor?: string,
  borderColor?: string
}

export interface ColorableBaseProps extends BaseProps, ColorableProps {  
}

export function ColorableBase(props: ColorableBaseProps) {
  return (
    <BaseElement {...props} className={getClassName(props.className, props)}>
      {props.children}
    </BaseElement>
  )
}

export interface ColorableBoxProps extends BoxProps, ColorableProps {  
}

export function ColorableBox(props: ColorableBoxProps) {
  return (
    <Box {...props} className={getClassName(props.className, props)}>
      {props.children}
    </Box>
  )
}

function getClassName(passedName: string | undefined, props: ColorableProps) {
  let className = 'Colorable';
  if (props.color)            className += ` color-${props.color}`;
  if (props.backgroundColor)  className += ` background-color-${props.backgroundColor}`;
  if (props.borderColor)      className += ` border-color-${props.borderColor}`;
  if (passedName)             className += ` ${passedName}`;
  return className;
}
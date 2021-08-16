import { ColorableBaseProps, ColorableBase, Spinner } from 'comps/common';
import './button.scss';

export interface ButtonProps extends ColorableBaseProps { 
  loading?: boolean,
  size?: string,
  disabled?: boolean,
  fill?: boolean,
}

export function Button(props: ButtonProps) {
  let className = 'Button';
  if (props.className)  className += ` ${props.className}`;
  if (props.color)      className += ` color-${props.color}`;  
  if (props.size)       className += ` size-${props.size}`;
  if (props.disabled)   className += ' disabled';
  if (props.fill)       className += ' fill';

  const htmlProps = {
    type: 'button',
    disabled: props.disabled
  };

  return (
    <ColorableBase {...props} as='button' className={className} htmlProps={htmlProps}>
      {props.loading 
      ? <Spinner size='sm'/>
      : props.children
      }
    </ColorableBase>
  )
}
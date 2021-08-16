import './spinner.scss';

export interface SpinnerProps {
  size?: string,
  className?: string
}

export function Spinner(props: SpinnerProps) {
  let className = 'Spinner';
  if (props.className)  className += ` ${props.className}`;
  if (props.size)       className += ` size-${props.size}`; 

  return <div className={className}/>;
}
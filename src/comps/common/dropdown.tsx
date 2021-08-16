import React, { useState, useCallback } from 'react';
import { Box, Icon, IconList, Span } from 'comps/common';
import './dropdown.scss';

export interface DropdownProps {
  className?: string,
  options: string[],
  onValueChange?: (x: string, i: number) => void
}

export function Dropdown(props: DropdownProps){  
  const [open, setOpen] = useState(false); 
  const [value, setValue] = useState(0); 

  let className = 'Dropdown';
  if (props.className) className += ` ${props.className}`;

  const onValueChangeCallback = props.onValueChange;

  const onItemClick = useCallback((x, i) => {
    setOpen(false);
    setValue(i);
    if (onValueChangeCallback) onValueChangeCallback(x, i);
  }, [onValueChangeCallback]);

  return (
    <div className={className}>
      <DropdownButton label={props.options[value]} onClick={() => setOpen(true)}/>
      {open && 
      <div className='DropdownMenu'>
        <div className='backdrop' onClick={() => setOpen(false)}/>
        <Box column className='content'>
          {React.Children.map(props.options, (x, i) =>
            <DropdownItem key={i} label={x} active={value === i} onClick={() => onItemClick(x, i)}/>
          )}
        </Box>
      </div>}
    </div>    
  );
}

function DropdownItem(props: {
  label: string,  
  active: boolean,
  onClick?: () => void
}) {  
  return (
    <Box className={`DropdownItem ${props.active ? 'active' : 'inactive'}`} onClick={props.onClick}>
      <Span>{props.label}</Span>
      <Box grow/>
      {props.active && 
      <Icon icon={IconList.faCaretLeft}/>}
    </Box>
  );
}

function DropdownButton(props: {
  label: string,  
  onClick?: () => void
}) {  
  return (
    <Box className={'DropdownButton'} center onClick={props.onClick}>
      <Span>{props.label}</Span>
      <Box grow/>
      <Icon icon={IconList.faCaretDown}/>
    </Box>
  );
}
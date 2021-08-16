import { useState, useCallback } from 'react';
import { BoxProps, Box, Span } from 'comps/common';
import './tooltip.scss';

export interface TooltipProps extends BoxProps {
  tip: string
}

export function Tooltip(props: TooltipProps) {
  const [isShown, setShown] = useState(false);

  const onMouseEnter = useCallback(() => {
    setShown(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShown(false);
  }, []);
  
  const className = `Tooltip ${isShown ? 'shown' : 'not-shown'} ${props.className}`;

  return (
    <Box {...props} className={className} column onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Box className='tooltip-content'>
        {props.children}
      </Box>
      {isShown && 
      <Box className='hover-box'>
        <Box className='hover-text'>
          <Span>{props.tip}</Span>
        </Box>
      </Box>}
    </Box>
  );
}
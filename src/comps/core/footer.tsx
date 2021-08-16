import { Box, Span } from 'comps/common';
import './footer.scss';

export default function Footer() {
  return (
    <Box as='footer' justify='center' className='Footer'>
      <Box column grow center className='inner'>
        <Span size='sm' color='faded'>{'©2020-2021 Phuntasia Games. All Rights Reserved.'}</Span>
      </Box>
    </Box>
  );
}
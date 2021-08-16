import { useWidth } from 'utils/common';
import { Box } from 'comps/common';
import './header.scss';

export default function Header() {
  const width = useWidth();
  return (
    <header className='Header'> 
      <Box className='sticky' grow center>
        {width < 1200 
        ? <LeftMobile/> 
        : <LeftDesktop />} 
        <Box grow />
        {width < 1200 
        ? <RightMobile/> 
        : <RightDesktop/>} 
      </Box> 
    </header>
  );
}

function LeftMobile() {
  return (
    <Box className='content-left mobile' justify='left' align='center'>

    </Box>
  );
}

function LeftDesktop() {
  return (
    <Box className='content-left desktop' justify='left' align='center'>

    </Box>
  );
}

function RightMobile() {
  return (
    <Box className='content-right mobile' justify='right' align='center'>

    </Box>
  );
}

function RightDesktop() {
  return (
    <Box className='content-right desktop' justify='right' align='center'>

    </Box>
  );
}
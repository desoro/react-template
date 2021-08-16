import { Page, Box, Heading, Paragraph, Button, Link, Image } from 'comps/common';
import './not-found.scss'

export default function NotFound() {
  return (
    <Page title='Not Found' mobileHeading='404 - Not Found' className='NotFound'>
      <Box column center>
        <Image path='media/favicon' oneSize width='64px'/>
        <Heading center className='title'>{'404'}</Heading>
        <Paragraph center className='info'>
          {"Oh my, you seem to be lost."}
        </Paragraph>
        <Link router to='/'>
          <Button>
            <Heading>{'Take Me Home'}</Heading>
          </Button>
        </Link>
      </Box>
    </Page>
  );
}
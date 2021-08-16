import { Helmet } from "react-helmet";
import { Box } from 'comps/common';
import config from 'config';
import './page.scss';

export interface PageProps {
  title: string,
  mobileHeading?: string,
  className?: string,
  children?: any
}

export function Page(props: PageProps) { 
  return (
    <>
      <Helmet>
        <title>{`${props.title} | ${config.siteName}`}</title>
      </Helmet>
      <Box className={`Page ${props.className}`} column align='center'>      
        {props.children}
      </Box>
    </>
  );
}
import { Link as RouterLink, NavLink } from 'react-router-dom';
import './link.scss';

export interface LinkProps {
  router?: boolean,
  nav?: boolean,
  exact?: boolean,
  to: string,
  className?: string,  
  href?: string,
  target?: string,
  rel?: string,
  onClick?: () => void,
  children?: any
}

export function Link(props: LinkProps) {  
  const className = `Link ${props.className}`;

  if (props.nav) {
    return (
      <NavLink className={className} to={props.to} exact={props.exact} onClick={props.onClick}>
        {props.children}
      </NavLink>
    );
  } else if (props.router) {
    return (
      <RouterLink className={className} to={props.to} onClick={props.onClick}>
        {props.children}
      </RouterLink> 
    );
  } else {
    return (
      <a className={className} href={props.to} target='_blank' rel='noopener noreferrer' onClick={props.onClick}>
        {props.children}
      </a>
    );
  }
}
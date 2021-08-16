import { Switch, Route } from 'react-router-dom';
import { Box } from 'comps/common';
import './main.scss';
import Home from '../pages/home';
import NotFound from '../pages/not-found';

export default function Main() {
  return (
      <main id='app' className='Main'>  
        <Box className='main-content' grow>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route component={NotFound}/> 
          </Switch> 
        </Box>       
      </main>
  );
}
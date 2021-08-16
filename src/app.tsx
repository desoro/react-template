import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import AxiosDefaults from './comps/core/axios-defaults';
import Providers from './comps/core/providers';
import ScrollToTop from './comps/core/scroll-to-top';
import Header from './comps/core/header';
import Main from './comps/core/main';
import Footer from './comps/core/footer';

export default function App() {
  return (
    <BrowserRouter>
      <AxiosDefaults />
      <ScrollToTop />
      <Providers>
        <Header />
        <Main /> 
        <Footer />
      </Providers>
    </BrowserRouter>
  );
}
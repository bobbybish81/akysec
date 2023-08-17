import React, { useState, useEffect } from 'react';
import { Routes , Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import sanityClient from './sanity';
import IContent from './interfaces/IContent';
import IHome from './interfaces/IHome';
import IServices from './interfaces/IServices';
import Home from './routes/Home';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Error from './routes/Error';

function App() {

  const [content, setContent] = useState<IContent>({
    loading: false,
    home: {} as IHome,
    services: {} as IServices,
    errorMessage: '',
  });

  useEffect(() => {
    setContent({...content, loading: true})
    const fetchData = async () => {
      const HomeContent = await sanityClient.fetch('*[_type == "home"][0]') ;
      const servicesContent = await sanityClient.fetch('*[_type == "services"][0]');
      try {
        setContent({
          ...content,
          loading: false,
          home: HomeContent,
          services: servicesContent,
        }); 
      } catch (error:any) {
        setContent({
          ...content,
          loading: false,
          errorMessage: error.message,
        });
      }
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path='/' element={<Home homeContent={content.home}/>}></Route>
          <Route path='/services' element={<Services servicesContent={content.services}/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </AnimatePresence>

    </>
  );
  
}

export default App;

import './App.css';
import Navbar from './Components/navbar/Navbar';
import Navbar1 from './Components/navbar/Navbar1';
import { Routes, Route } from 'react-router-dom';
import Now_playing from './Components/Now_playing';
import Popular from './Components/Popular';
import TopRated from './Components/TopRated';
import Upcoming from './Components/Upcoming';
import { useCallback, useState, useEffect } from 'react';

function App() {
  const [searchItem, setSearchItem] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleInputChange = useCallback((e) => {
    setSearchItem(e.target.value);
  }, [setSearchItem]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 768 ? (
        <Navbar1 handleInputChange={handleInputChange} className="overflow-hidden" />
      ) : (
        <Navbar handleInputChange={handleInputChange} className="overflow-hidden" />
      )}
      <div className="container mx-auto py-2 text-text_light dark:text-text_dark w-[98.5%]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mt-[4%]">
          <Routes>
            <Route path='/' element={<Now_playing search_item={searchItem} />}></Route>
            <Route path='popular' element={<Popular search_item={searchItem} />}></Route>
            <Route path='topRated' element={<TopRated search_item={searchItem} />}></Route>
            <Route path='upcoming' element={<Upcoming search_item={searchItem} />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

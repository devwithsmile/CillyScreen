import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Now_playing from './Components/Now_playing';
import Popular from './Components/Popular';
import TopRated from './Components/TopRated';
import Upcoming from './Components/Upcoming';
import { useCallback, useState } from 'react';
function App() {

  const [search_item, setSearchItem] = useState('');
  const handleInputChange = useCallback((e) => {
    setSearchItem(e.target.value);
  }, [setSearchItem]);

  return (
    <>
      <Navbar handleInputChange={handleInputChange} />
      <div className="container mx-auto py-2 text-text_light dark:text-text_dark w-[98.5%]">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[4%]">
          <Routes>
            <Route path='/' element={<Now_playing search_item={search_item} />}></Route>
            <Route path='popular' element={<Popular search_item={search_item} />}></Route>
            <Route path='topRated' element={<TopRated search_item={search_item} />}></Route>
            <Route path='upcoming' element={<Upcoming search_item={search_item} />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbars';
import Banner from './Components/Banners';
import List from './Components/Lists';
import Favourites from './Components/Favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    {/* <Navbar />
    <Banner />
    <List/> */}
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner/>
              <List />
            </>
          }
        />
        <Route path="/fav" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  </>
);
}
export default App;

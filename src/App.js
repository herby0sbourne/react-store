import { Routes, Route } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/" component={HomePage} exact={true} /> */}
      </Routes>
    </div>
  );
}
// function App() {
//   return (
//     <div>
//       <HomePage />
//     </div>
//   );
// }

export default App;

import HomePage from './pages/homepage/HomePage';
import { Routes, Route } from 'react-router-dom'; // In react-router-dom v6, "Switch" is replaced by routes "Routes".
import './App.css';

const Nike = () => {
  return <div>hello world!</div>;
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nike" element={<Nike />} />
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

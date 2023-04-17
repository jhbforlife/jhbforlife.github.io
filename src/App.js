// External components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Internal components
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

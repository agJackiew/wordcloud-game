import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';
import ResultPage from './pages/ResultPage';
 
function App() {

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {isLoggedIn && <Route path="/game" element={<GamePage />} />}
        {isLoggedIn && <Route path="/result" element={<ResultPage />} />}
        <Route
            path="*"
            element={<Navigate to="/" />}
        />
      </Routes>
    </Layout>
  );
}

export default App;

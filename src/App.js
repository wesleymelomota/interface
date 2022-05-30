import logo from './logo.svg';
import './App.css';
import Layout from './components/layout/Layout'
import Profile from './components/profile/Profile'
import Repositorio from './components/repos/Repositorio'


function App() {
  return (
    <Layout>
        <Profile/>
        <Repositorio/>
    </Layout>
  );
}

export default App;

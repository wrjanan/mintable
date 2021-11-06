import './App.css';
import { RouteContainer } from './routes/RouteContainer';
import { MainHeader } from './components/mainheader/MainHeader';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderContainer } from './routes/HeaderContainer';

function App() {
  return (
    <Layout>
      <RouteContainer />
    </Layout>
  );
}

export default App;

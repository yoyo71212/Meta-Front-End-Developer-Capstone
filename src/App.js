import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="layout">
      <Header className="header" />

      <Main className="main" />

      <Footer className="footer" />
    </div>
  );
}

export default App;

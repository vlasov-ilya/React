import './App.css';
import Menu from './components/menu'
import Interior from './components/interior'
import Service from './components/service'
import Designers from './components/designers'
import Pacages from './components/packages'
import Footer from './components/footer';
import Contact from './components/contact'


function App() {
  return (
  <div className = 'main'>
    <Menu />
    <Interior/>
    <Service/>
    <Designers/>
    <Pacages/>
    <Contact/>
    <Footer/>
  </div>
  );
};

export default App;

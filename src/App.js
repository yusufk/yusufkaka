import './App.css';
import About from './components/about'
import Header from './components/header';
import Contact from './components/contact';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Services from './components/services';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Contact></Contact>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Services></Services>
    </div>
  );
}

export default App;

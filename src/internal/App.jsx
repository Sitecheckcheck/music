import './App.css';
import Main from './components/Main';
import Bar from './components/Bar';
import Footer from './components/Footer';
// import Signin from '../signin/signin'
// import Signup from '../signup/signup'

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Main />
        <Bar />
        <Footer />
        {/* <Signin/>
        <Signup /> */}
      </div>
    </div>
  );
}

export default App;

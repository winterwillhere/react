import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Calculations from './Techn'
import EachPerson from './Calc2'
import PlusMinus from "./plus-minus";
import TE from "./TE";
import SomeSecrets from "./Some-Secrets";
import Example from "./Example";
const App = () => {
  return (
    <div className="App">
      <div className="faq-reserve-header"> <Header /></div>
      <div className="faq-reserve_calculations-blocks"> <Calculations /></div>
      <div> <EachPerson /></div>
      <div> <PlusMinus /></div>
        <div>  <TE /> </div>
        <div> <SomeSecrets /></div>
        <div> <Example/></div>
    </div>
  );
}


export default App;

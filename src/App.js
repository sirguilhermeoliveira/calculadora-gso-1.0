import React, { Component } from 'react';
import KeyPad from './components/KeyPad';
import Output from './components/Output';
import './App.css';

/* Aqui é feito o click da classe buttonName, os que não forem números tem uma 
função específica definida no código */

class App extends Component {
  state = {
    result: ''
  }
  buttonPressed = (buttonName) => {
    if(buttonName === '='){
      this.calculate()
    }  else
    if(buttonName === 'C'){
      this.reset()
    } else if(buttonName ==='CE'){
      this.backspace();
    } else
    this.setState({
    result: this.state.result + buttonName
  });
};
/* funções dos botões que não são números */
reset = () => {
  this.setState({
    result: ""
  })
}

backspace = () => {
  this.setState({
    result: this.state.result.slice(0, -1)
  })
}

calculate = () => {
  try {
    this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "" ) + ""
    })
/*     caso ocorra algo fora do esperado dá mensagem de erro no catch/try */
} catch (e) {
    this.setState({
        result: "Erro"
    })
  }
};
/* renderiza e aplica estilo na aplicação */
  render(){
    return(
    <div className="App">
    <div className="calc-body">
    <Output result ={this.state.result}/>
    <KeyPad buttonPressed={this.buttonPressed}/>
    </div>
    </div>
    );
  }
}
export default App;

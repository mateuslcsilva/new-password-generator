import { useState, useReducer, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Button from "./components/Button/Button";
import numeros from './assets/numeros'
import letrasMaiusculas from './assets/letrasMaiusculas'
import letrasMinusculas from './assets/letrasMinusculas'
import simbolos from './assets/simbolos'
import { initialFormTypes } from "./types/initialFormState";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const initialFormState: initialFormTypes = {
    numeros: true,
    letrasMaiusculas: false,
    letrasMinusculas: true,
    simbolos: false,
    tamanhoSenha: 6,
    senha: "",
    copiado: false,
  };

  const formReducer = (state: any, action: any) => {
    var key = action.payload;
    switch (action.type) {
      case "numeros":
        return {
          ...state,
          numeros: action.value
        }
        break;
      case "letrasMaiusculas":
        return {
          ...state,
          letrasMaiusculas: action.value
        }
        break;
      case "letrasMinusculas":
        return {
          ...state,
          letrasMinusculas: action.value
        }
        break;
      case "simbolos":
        return {
          ...state,
          simbolos: action.value
        }
        break;
      case "button":
        return {
          ...state,
          tamanhoSenha: action.value,
        };
        break;
      case "senha":
        return {
          ...state,
          senha: action.value,
        };
        break;
      case "copiado":
        return {
          ...state,
          copiado: action.value,
        };
        break;
        default:
          return
    }
  };

  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const getPassword = () => {
    dispatch({ type: "copiado", value: false });
    let state = formState;
    let keys = [];
    let password = "";
    for (let key in state) {
      if (state[key] == true) keys.push(key);
    }

    for (let i = 1; i <= formState.tamanhoSenha; i++) {
      let aleat = keys[Math.floor(Math.random() * keys.length)]; // escolhe aleatório dentre os tipos de caracteres
      switch (aleat) {
        case "numeros":
          password += numeros[Math.floor(Math.random() * numeros.length)]; // escolhe um numero aleatório
          break;
        case "letrasMaiusculas":
          password += letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)]; // letra minúscula aleatória
          break;
        case "letrasMinusculas":
          password +=
            letrasMinusculas[
              Math.floor(Math.random() * letrasMinusculas.length)
            ]; // letra maiúscula aleatória
          break;
        case "simbolos":
          password += simbolos[Math.floor(Math.random() * simbolos.length)]; // letra maiúscula aleatória
          break;
      }
    }
    dispatch({ type: "senha", value: password });
    if(password.length != formState.tamanhoSenha)  getPassword()
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formState.senha);
    dispatch({ type: "copiado", value: true });
    toast.success('Pronto, senha copiada!')
  };

  useEffect(() => {
    console.log(formState)
  }, [formState])

  return (
    <div className="App">
      <ToastContainer
      position="bottom-right"
      />
      <div className="container">
        <h2>Password Generator</h2>
        <h3>Selecione o tipo de caracter:</h3>
        <div className="checkbox-container">
          <div>
            <input
              type="checkbox"
              name="numeros"
              id="numeros"
              checked={formState.numeros}
              onChange={(e) =>
                dispatch({ type: e.target.id, value: e.target.checked })
              }
            />
            <label htmlFor="numeros">Números</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="letrasMaiusculas"
              id="letrasMaiusculas"
              checked={formState.letrasMaiusculas}
              onChange={(e) =>
                dispatch({ type: e.target.id, value: e.target.checked })
              }
            />
            <label htmlFor="letrasMaiusculas">Letras Maiúsculas</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="letrasMinusculas"
              id="letrasMinusculas"
              checked={formState.letrasMinusculas}
              onChange={(e) =>
                dispatch({ type: e.target.id, value: e.target.checked })
              }
            />
            <label htmlFor="letrasMinusculas">Letras Minúsculas</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="simbolos"
              id="simbolos"
              checked={formState.simbolos}
              onChange={(e) =>
                dispatch({ type: e.target.id, value: e.target.checked })
              }
            />
            <label htmlFor="simbolos">Símbolos</label>
          </div>
        </div>
        <h3>Selecione quantos caracteres:</h3>
        <div className="buttons-container">
          <Button
            number="6"
            onClick={(e: {
              target: {
                type: string;
                value: number;
              };
            }) =>
              dispatch({ type: e.target.type, value: Number(e.target.value) })
            }
            active={formState.tamanhoSenha == 6 ? true : false}
          />
          <Button
            number="8"
            onClick={(e: {
              target: {
                type: string;
                value: number;
              };
            }) =>
              dispatch({ type: e.target.type, value: Number(e.target.value) })
            }
            active={formState.tamanhoSenha == 8 ? true : false}
          />
          <Button
            number="9"
            onClick={(e: {
              target: {
                type: string;
                value: number;
              };
            }) =>
              dispatch({ type: e.target.type, value: Number(e.target.value) })
            }
            active={formState.tamanhoSenha == 9 ? true : false}
          />
          <Button
            number="10"
            onClick={(e: {
              target: {
                type: string;
                value: number;
              };
            }) =>
              dispatch({ type: e.target.type, value: Number(e.target.value) })
            }
            active={formState.tamanhoSenha == 10 ? true : false}
          />
          <Button
            number="11"
            onClick={(e: {
              target: {
                type: string;
                value: number;
              };
            }) =>
              dispatch({ type: e.target.type, value: Number(e.target.value) })
            }
            active={formState.tamanhoSenha == 11 ? true : false}
          />
          <Button
            number="12"
            onClick={(e: {
              target: {
                type: string;
                value: number;
              };
            }) =>
              dispatch({ type: e.target.type, value: Number(e.target.value) })
            }
            active={formState.tamanhoSenha == 12 ? true : false}
          />
        </div>
        <button className="button-generate" onClick={getPassword}>
          Criar Senha
        </button>
        <button className="button-password">
          <h2>
            <abbr title="Clique para copiar!" onClick={copyToClipboard}>
              {formState.senha}
            </abbr>
          </h2>
        </button>
      </div>
    </div>
  );
}

export default App;

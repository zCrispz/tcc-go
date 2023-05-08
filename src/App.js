import {useState} from 'react';
// import { Switch, Route, Link } from 'react-router-dom';
import {Route, Routes, Redirect} from 'react-router-dom';
import logo from './assets/logo.svg';
import person from './assets/person1.svg';
import olho1 from './assets/olho1.svg';
import olho2 from './assets/olho2.svg';
import './styles.css';
import conta from './conta.js';



function App() {
  const[user, setUser] = useState('')
  const[password, setPassoword] = useState('')
  const senha = document.getElementById("password")
  const icone = document.getElementById("olho")

  function verSenha() {
   let inputTypePassword = senha.type == "password"
   
   if (inputTypePassword){
      senha.setAttribute("type","text")
      icone.setAttribute("src", olho1)
   } else{
      senha.setAttribute("type","password")
      icone.setAttribute("src", olho2)
   }

  }

  return (

   <div className="tela">
      <div className="tela-login">
        <div className="fundo-login">
          <form className="login-form">
            {/* <span className="login-form-title"> </span> COLOCAR TITULO EM CIMA DO LOGO*/}

            <span className="login-form-title">
              <img src={logo} alt="logo da tela de login" /> {/* LOGO */}
            </span>
            
            <div className="estilo-input">
              <input 
              className= {user !== "" ? 'has-val input' : 'input'}
              type="text"      /*BAGUIETI QUE FAZ O EMAIL FICAR EM CIMA DA PALAVRA*/
              value={user} 
              onChange={e => setUser(e.target.value)}/>
              <span className="focus-input" data-placeholder="Usuário"></span>

                          <div className="icon">
                            <img src={person}/>   {/*icone do carinha do email*/}
                          </div>
            </div>

            <div className="estilo-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'}
              id="password"
              type="password"
              value={password} /*IGUAL AO DO EMAIL*/
              onChange={e => setPassoword(e.target.value)} />
              <span className="focus-input" data-placeholder="Senha"></span>
        
                <div className="icon">
                  <img src={olho2} id="olho" onClick={verSenha} />  {/*icone do carinha do email*/}
                </div>
            
            </div>

            <div className="fundo-btn">
              <button action="./conta.js"className="login-btn">LOGIN</button>
            </div>

            <div className="text-center">
              <span className="txt1">Esqueceu a senha?</span>
              <a className="txt2" href="">Recuperar senha</a>
            </div>

            <main>
            <Routes>  
              <Route path='/conta' element={<conta/>} />
            </Routes>  
            </main>

          </form>
        </div>        
      </div>
  </div>

  );
}

export default App;

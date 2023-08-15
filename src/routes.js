import Carrinho from 'pages/Carrinho';
import Feira from 'pages/Feira';
import Login from 'pages/Login';
import { useState } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

function Router() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState(0);

  return(
    <BrowserRouter>
      <Switch>

        <Route exact path='/'>
          <Login nome={nome} setNome={setNome} saldo={saldo} setSaldo={setSaldo}>
          </Login>
        </Route>

        <Route exact path='/feira'>
          <Feira>
          </Feira>
        </Route>

        <Route exact path='/carrinho'>
          <Carrinho>
          </Carrinho>
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default Router;
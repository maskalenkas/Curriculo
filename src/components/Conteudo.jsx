import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Fale from '../pages/Fale';
import Portfolio from '../pages/Portfolio';

import * as ROUTES from '../Routes/routes';

import '../styles/components/Conteudo.css';

import { MenuContext } from '../context/MenuContext';

import { Route, Switch } from 'react-router-dom';
import { Hamburguer } from './Hamburguer';
import { useContext } from 'react';

export function Conteudo() {
  const { menuIsOn } = useContext(MenuContext);

  return (
    <div className="conteudoContainer">
      {!menuIsOn && <Hamburguer />}
      <Switch>
        <Route path={ROUTES.SOBRE} component={Sobre} />
        <Route path={ROUTES.PORTFOLIO} component={Portfolio} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

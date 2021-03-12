import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Fale from '../pages/Fale';

import * as ROUTES from '../Routes/routes';

import '../styles/components/Conteudo.css';

import { Route, Switch } from 'react-router-dom';

export function Conteudo() {
  return (
    <div className="conteudoContainer">
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SOBRE} component={Sobre} />
        <Route path={ROUTES.FALE} component={Fale} />
      </Switch>
    </div>
  );
}

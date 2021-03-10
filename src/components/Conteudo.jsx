import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import * as ROUTES from '../Routes/routes';

import { Route, Switch } from 'react-router-dom';

export function Conteudo() {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SOBRE} component={Sobre} />
      </Switch>
    </div>
  );
}

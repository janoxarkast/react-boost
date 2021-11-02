import './App.css';
import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarTop} from "./components/components-ui/NavbarTop";
const Creatures = lazy(() => import('./components/Views/Creatures'));


const logo = 'https://i.pinimg.com/736x/9b/55/00/9b5500887359a38dc030cc8c0ed4e22a.jpg'

function App() {
  return (
    <div className="App">
        <NavbarTop />
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path={'/'} ><div></div></Route>
            <Route exact path={'/creatures'} component={Creatures} />
            <Route path={'/creature/:id'} > <div>Dettaglio Mostro</div></Route>
        </Switch>
        </Suspense>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

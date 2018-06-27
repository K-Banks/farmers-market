import React from 'react';
import MarketSchedule from './marketSchedule';
import SeasonalProduce from './seasonalProduce';
import {Switch, Route} from 'react-router-dom';

function App(){
  return (
    <div>
      <h2>Avery's Organics</h2>

      <Switch>
        <Route exact path='/' component={MarketSchedule}/>
        <Route exact path='/season' component={SeasonalProduce}/>
      </Switch>
    </div>
  );
}

export default App;

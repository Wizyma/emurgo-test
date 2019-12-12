import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, Content } from './styles';
import Home from './components/Home';
import Header from './components/Header';


const App: React.FC = () => {
  return (
    <Container direction='column'>
      <>
      <Route component={Header} />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      </>
    </Container>
  );
}

export default App;

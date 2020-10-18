import React from 'react';
import './App.css';
import Personnage from './class/Personnage';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      picked: false,
      namePerso: '',
    }
  }

  render() {
    const { playing, picked, namePerso } = this.state
    return (
      <div className="App" style={{ height: window.innerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        {
          !playing ?
            <>
              <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: window.innerWidth }}><img src={require('./icons/avengers.svg')} alt={'avengers'} />venger's Game</h1>
              <h1 style={{ margin: 30 }} onClick={() => this.setState({ playing: true })}>Start</h1>
            </>
            :
            !picked ?
              <div>
                <h1>Sélectionne ton adversaire</h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img style={{ height: 100, width: 100, margin: 20 }} onClick={() => this.setState({ namePerso: 'Deadpool', picked: true })} src={require('./icons/deadpool.png')} alt={'deadpool'} />
                  <img style={{ height: 100, width: 100, margin: 20 }} onClick={() => this.setState({ namePerso: 'Spiderman', picked: true })} src={require('./icons/spiderman.png')} alt={'spiderman'} />
                  <img style={{ height: 100, width: 100, margin: 20 }} onClick={() => this.setState({ namePerso: 'Thor', picked: true })} src={require('./icons/thor.png')} alt={'thor'} />
                  <img style={{ height: 100, width: 100, margin: 20 }} onClick={() => this.setState({ namePerso: 'Wolverine', picked: true })} src={require('./icons/wolverine.png')} alt={'wolverine'} />
                </div>
              </div>
              : <Personnage namePerso={namePerso} />
        }
      </div>

    );
  }
}
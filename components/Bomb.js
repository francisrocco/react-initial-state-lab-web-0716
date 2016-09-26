const React = require('React')

class Bomb extends React.Component {
  constructor(props) {
    super();

    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    const message = this.state.scondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`
    return(
      <div>
        {message}
      </div>
    )
  }
}

module.exports = Bomb

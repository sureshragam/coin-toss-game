// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {head: true, headCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const value = Math.round(Math.random())
    console.log(value)
    if (value === 1) {
      this.setState(prevState => ({
        head: false,
        tailsCount: prevState.tailsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        head: true,
        headCount: prevState.headCount + 1,
      }))
    }
  }

  render() {
    const {head, headCount, tailsCount} = this.state
    return (
      <div className="coin-toss-container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {head ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss results"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss results"
            />
          )}

          <button type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="details-tab">
            <p>Total: {headCount + tailsCount}</p>
            <p>Heads: {headCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

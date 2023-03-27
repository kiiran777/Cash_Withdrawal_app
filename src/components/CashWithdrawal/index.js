// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(preState => ({balance: preState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    return (
      <div className="app-container">
        <div className="details-container">
          <div className="name-container">
            <p className="initial">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="mybalance-container">
            <div>
              <p className="balance">Your Balance</p>
            </div>
            <div>
              <p className="rupees">{balance}</p>
              <p className="Inword">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

const Shop = () => {

  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <div>
      <h1>Deposit/Withdraw Money</h1>
        <button className="btn btn-primary mx-2" onClick={() => depositMoney(100)}>+</button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={() => withdrawMoney(50)}>-</button>
    </div>
  )
}

export default Shop
import React from 'react'

import {TransactionProvider} from '../contexts/TransactionContext';
import AddTransaction from './AddTransaction';


const Transaction = () => {
  return (
    <div>
      <TransactionProvider>
        <AddTransaction />
      </TransactionProvider>
    </div>
  )
}

export default Transaction;
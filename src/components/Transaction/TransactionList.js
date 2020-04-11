import React from 'react';
import {useTransaction} from '../../contexts/TransactionContext'
import TransactionItem from './TransactionItem';

export const TransactionList = () => {
  const { transactions } = useTransaction();

  return (
    <>
      <h3>Historique</h3>
      <ul className="list">
        {transactions.map(transaction => (<TransactionItem key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default TransactionList;

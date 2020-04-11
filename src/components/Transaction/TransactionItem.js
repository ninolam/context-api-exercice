import React from 'react';

const TransactionItem = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount > 0 && sign}{(transaction.amount)} €</span>
        </li>
    )
}

export default TransactionItem;


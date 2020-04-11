import React, { createContext, useContext, useReducer, useMemo } from 'react';
import TransactionReducer from '../components/TransactionReducer'

const TransactionContext = createContext()


const TransactionProvider = (props) => {

    const [state, dispatch] = useReducer(TransactionReducer, { transactions: [] })
    const value = useMemo(() => [state, dispatch], [state])
    return <TransactionContext.Provider value={value} {...props} />

}

const useTransaction = () => {
    const context = useContext(TransactionContext)
    if (!context) {
        throw new Error(`useTransaction must be used within a TransactionProvider`)
    }
    // return context
    const [state, dispatch] = context
    const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction })
    // const deleteTransaction = (id) => dispatch({ type: 'ADD_TRANSACTION', payload: id })

    return {
        state,
        dispatch,
        addTransaction,
    }
}

export { TransactionProvider, useTransaction }


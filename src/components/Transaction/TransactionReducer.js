// import React from 'react'

const transactionReducer = (state, action) => {
    switch(action.type) {
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
    }
  }

  export default transactionReducer;
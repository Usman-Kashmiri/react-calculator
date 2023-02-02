import { ACTIONS } from "../App"
import React from 'react'

function OperationButton({ dispatch, operation, symbol }) {
    return (
        <>
            <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } }) }>
                {symbol}
            </button>
        </>
    )
}

export default OperationButton
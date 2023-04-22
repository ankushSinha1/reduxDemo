import {useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from './state/index.js'
export const Shop = () => {
    const dispatch = useDispatch()
    const actions = bindActionCreators(actionCreators, dispatch)
    return (
        <div>
            <button className="btn btn-primary" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
            Deposit/Withdraw money
            <button className="btn btn-primary" onClick={()=>{actions.depositMoney(100)}}>+</button>
        </div>
    )
}
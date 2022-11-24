import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/users';

const Test = () => {

    const dispatch = useDispatch();
    const store = useSelector((state)=> state.users.value)
    const showStore = (
       store ? <div>{store}</div> : <div></div> 
    )
    

    const loginFunction = () => {
        dispatch(login('oWSFmTSuH708HZvLJqOFfKSu-Sohjr-z'))
    }

    const logoutFunction = () => {
        dispatch(logout())
    }

    return (
        <>
            <button onClick={()=> loginFunction()}>Login</button>
            <button onClick={()=> logoutFunction()}>Logout</button>
            {store}
        </>
    )
}


export default Test;
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from '../../features/counter/counterSlice';

export const Counter = () => {

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return(
        <div>
            <span>Value: {count}</span>
            <div className='counter-btn'>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    )
}
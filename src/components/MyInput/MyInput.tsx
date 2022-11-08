import './MyInput.css';
import { FC, KeyboardEvent } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';

const MyInput: FC = observer(() => {
    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && store.searchStore.isAllowed) {
            store.geoIpStore.newDataLookup();
        }
    }

    return (
        <div className='input_container'>
            <input 
                type='text'
                placeholder='Search For any IP address or domain'
                value={store.searchStore.value} 
                onChange={(e) => store.searchStore.handleInputChange(e)}
                onKeyDown={(e) => handleEnter(e)}
            /> 
            <button 
                onClick={() => store.geoIpStore.newDataLookup()}
                disabled={!store.searchStore.isAllowed}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
            </button>
        </div>
    );
});

export default MyInput;
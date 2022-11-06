import { FC, KeyboardEvent } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../store/store';

const MyInput: FC = observer(() => {
    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Enter' && store.searchStore.isAllowed) {
            store.geoIpStore.newDataLookup();
        }
    }

    return (
        <>
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
                {">"}
            </button>
        </>
    );
});

export default MyInput;
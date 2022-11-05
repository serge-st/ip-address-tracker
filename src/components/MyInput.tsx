import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../store/store';

const MyInput: FC = observer(() => {
    return (
        <input 
            type='text'
            placeholder='Search For any IP address or domain'
            value={store.searchStore.value} 
            onChange={(e) => store.searchStore.handleInputChange(e)}
        />
    );
});

export default MyInput;
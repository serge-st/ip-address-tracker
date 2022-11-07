import './style.css'
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import Header from './components/Header';
import IpMap from './components/Map/IpMap';
import store from './store/store';

const App: FC = observer(() => {
    return (
        <div className='app'>
            <Header />
            <IpMap isLoading={store.geoIpStore.isLoading} />
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/serge-st/ip-address-tracker" target="_blank" rel="noreferrer">Serge St</a>.
            </div>
        </div>
    );
});

export default App;
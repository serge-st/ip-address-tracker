import './style.css'
import './App.css'
import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Header from './components/Header/Header';
import IpMap from './components/Map/IpMap';
import store from './store/store';
import Loader from './components/Loader/Loader';

const App: FC = observer(() => {
    useEffect(() => {
        store.geoIpStore.getGeoIpData();
    }, []);

    if (store.geoIpStore.error) {
        return <pre>{store.geoIpStore.error}</pre>
    }

    return (
        <div className='app'>
            <Loader visible={store.geoIpStore.isLoading}/>
            <Header />
            <IpMap
                isLoading={store.geoIpStore.isLoading}
            />
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/serge-st/ip-address-tracker" target="_blank" rel="noreferrer">Serge St</a>.
            </div>
        </div>
    );
});

export default App;
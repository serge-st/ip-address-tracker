import { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../store/store';
import MyInput from './MyInput';
import Loader from './Loader/Loader';

const Header: FC = observer(() => {
    useEffect(() => {
        store.geoIpStore.getGeoIpData();
    }, [])

    if (store.geoIpStore.error) {
        return <pre>{store.geoIpStore.error}</pre>
    }

    if (store.geoIpStore.isLoading) {
        return <Loader />
    }

    return (
        <>
            {store.geoIpStore.data
                ?
                <div className='ip_ui_container'>
                    <h1>IP Address Tracker</h1>
                    <MyInput />
                    <div className='ip_data_container'>
                        <div className="data_block">
                            <div className="data_name">IP ADDRESS</div>
                            <div className="data_value">{store.geoIpStore.data.ip}</div>
                        </div>
                        <div className="data_block">
                            <div className="data_name">LOCATION</div>
                            <div className="data_value">{store.geoIpStore.data.location.region}, {store.geoIpStore.data.location.city}</div>
                        </div>
                        <div className="data_block">
                            <div className="data_name">TIMEZONE</div>
                            <div className="data_value">UTC {store.geoIpStore.data.location.timezone}</div>
                        </div>
                        <div className="data_block">
                            <div className="data_name">ISP</div>
                            <div className="data_value">{store.geoIpStore.data.isp}</div>
                        </div>
                    </div>
                </div>
                : null
            }           
        </>
    );
});

export default Header;
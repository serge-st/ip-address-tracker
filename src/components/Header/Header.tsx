import './Header.css';
import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import store from '../../store/store';
import MyInput from '../MyInput/MyInput';

const Header: FC = observer(() => {
    return (
        <>
            {store.geoIpStore.data
                ?
                <header>
                    <h1 className='title'>IP Address Tracker</h1>
                    <div className="ip_ui_container">
                        <MyInput 
                            className='wide'
                            placeholder='Search For any IP Address or Domain'
                        />
                        <MyInput 
                            className='narrow'
                            placeholder='Search IP or Domain'
                        />
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
                </header>
                : null
            }           
        </>
    );
});

export default Header;
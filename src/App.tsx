import './style.css'
import './App.css'
import { FC, useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Header from './components/Header/Header';
import IpMap from './components/Map/IpMap';
import store from './store/store';
import useWindowSize from './hooks/useWindowSize';

const App: FC = observer(() => {
    const [remainingSpace, setRemainingSpace] = useState<number>(0);
    const appHeight = useWindowSize();
    const attrRef = useRef<HTMLDivElement>(null);
    const headerHeight = 280;

    useEffect(() => {
        if (attrRef.current) {
            setRemainingSpace(
                appHeight - headerHeight - attrRef.current.clientHeight
            )
        }
    }, [appHeight])

    console.log('appHeight', appHeight)
    console.log('remainingSpace', remainingSpace)

    return (
        <div className='app'>
            <Header />
            <IpMap
                height={remainingSpace}
                isLoading={store.geoIpStore.isLoading}
            />
            <div className="attribution" ref={attrRef}>
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/serge-st/ip-address-tracker" target="_blank" rel="noreferrer">Serge St</a>.
            </div>
        </div>
    );
});

export default App;
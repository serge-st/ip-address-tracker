import './style.css'
import { FC } from 'react';
import Header from './components/Header';

const App: FC = () => {
    return (
        <div className='app'>
            <Header />
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/serge-st/ip-address-tracker">Serge St</a>.
            </div>
        </div>
    );
};

export default App;
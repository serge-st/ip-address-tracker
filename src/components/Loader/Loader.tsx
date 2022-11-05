import { FC } from 'react';
import './Loader.css';

const Loader: FC = () => {
    return (
        <div className="loader_container">
            <div className='lds-roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
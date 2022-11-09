import { FC } from 'react';
import './Loader.css';

interface LoaderProps {
    visible: boolean;
}

const Loader: FC<LoaderProps> = ({visible}) => {
    const rootClasses = ["loader_modal"];

    if (visible) {
        rootClasses.push("active")
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className="loader_container">
                <h1 className="loader_title">Loading...</h1>
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
        </div>
    );
};

export default Loader;
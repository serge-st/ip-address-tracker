import { observer } from 'mobx-react-lite';
import { FC, useEffect, useState } from "react";
import './IpMap.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngTuple } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import store from "../../store/store";

interface IpMapProps {
    isLoading: boolean;
}

const ChangeView: FC = observer(() => {
    const map = useMap();
    if (store.geoIpStore.data?.location) {
        const {lat, lng} = store.geoIpStore.data?.location;
        map.setView([lat, lng]);
    }
    return null
})

const IpMap: FC<IpMapProps> = observer(({isLoading}) => {
    const [position, setPosition] = useState<LatLngTuple | undefined>(undefined);
    const customIcon = new Icon({
        iconUrl: "/icon-location.svg",
        iconSize: [23, 28],
    });

    useEffect(() => {
        if (!store.geoIpStore.isLoading && store.geoIpStore.data?.location) {
            const {lat, lng} = store.geoIpStore.data?.location;
            setPosition([lat, lng])
        }
    }, [isLoading]);

    return (
        <div id='map'>
            {position
                ?
                <MapContainer
                    center={position} 
                    zoom={12} 
                    scrollWheelZoom={false}
                    zoomControl={false}
                >
                    <ChangeView />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker 
                        position={position}
                        icon={customIcon}
                    >
                        <Popup>
                            Your Approximate Location
                        </Popup>
                    </Marker>
                </MapContainer>                     
                : null
            }
        </div>
    );
});

export default IpMap;
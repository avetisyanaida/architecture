import React from 'react';
import './ymaps.css';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Location = () => {
  const mapState = {
    center: [55.76, 37.64],
    zoom: 10,
  };

  const placemarks = [
    { coordinates: [55.77, 37.65], icon: 'https://rakurs.moscow/assets/img/map/project.svg' },
    { coordinates: [55.74, 37.62], icon: 'https://rakurs.moscow/assets/img/map/placemark-shopping.svg' },
  ];

  const mapStyle = {
    width: '100%',
    height: '352px',
  };

  return (
    <YMaps>
      <Map defaultState={mapState} style={mapStyle} className="custom-map"> 
          {placemarks.map((placemark, index) => (
            <Placemark
              key={index}
              geometry={placemark.coordinates}
              options={{
                iconLayout: 'default#image',
                iconImageHref: placemark.icon,
                iconImageSize: [48, 48],
                iconImageOffset: [-24, -48],
              }}
              properties={{
                className: 'custom-placemark',
              }}
            />
          ))}
      </Map>
    </YMaps>
  );
};

export default Location;

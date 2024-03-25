import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '400px',
        };

        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{
                    lat: YOUR_LATITUDE,
                    lng: YOUR_LONGITUDE
                }}
            >
                <Marker position={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: YOUR_API_KEY
})(MapContainer);

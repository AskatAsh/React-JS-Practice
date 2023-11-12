import './App.css'
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  function App() {
      const defaultProps = {
        center: {
          lat: 22.330370,
          lng: 91.832630
        },
        zoom: 11
      };

    return (
      <>
        <h2>React Google Maps</h2>
        <div style={{ height: '500px', width: '50vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>

      </>
    )
  }

  AnyReactComponent.propTypes = {
    text: PropTypes.string
  };
  

  export default App

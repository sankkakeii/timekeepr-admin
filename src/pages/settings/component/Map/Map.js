/* global google */
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { DrawingManager }  from "react-google-maps/lib/components/drawing/DrawingManager";

var lat =''
var long =''
const getCurrentLocation = () => {
  const successCall = (position) => {
    lat = position.coords.latitude
    long = position.coords.longitude

    console.log(position)
  }
  const errorCall = (error) => {
    console.log(error)
  }

  navigator.geolocation.getCurrentPosition(successCall, errorCall)
}

export default withScriptjs(withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    center={props.center}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON,
          ],
        },
      }}
      onPolygonComplete={props.doneDrawing}
    />
    {/* {lat && long && ( */}
    {/* {props.center.lat && props.center.lng && */}
    {props.center.lat && props.center.lng && (
      <Marker position={props.center} />
    )}
  </GoogleMap>
)));

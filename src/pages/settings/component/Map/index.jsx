/* global google */
import React, { Component } from "react";
import Moment from "react-moment";
import Map from "./Map";
import "./App.css";


const googleMapURL = `https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=${process.env.REACT_APP_MAPS_API_KEY}`;

class MapApp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      content: "Getting position...",
      insideFence: false,
      previousPolygon: null,
      fence: null,
      watchID: null,
      lastFetched: null,
      fenceCoords: null,
    };
  }

  componentDidMount() {
    this.watchLocation();
  }
  UNSAFE_componentWillUnmount() {
    this.unwatchLocation();
  }

  // get fence geo coordinates...modified solution by Chad Killingsworth from stackOverflow
  getFenceCoords(polygon) {


    var polygonBounds = polygon.getPath();

    var polygonCoordsList = [];

    var contentString;
    
    // Iterate over the polygonBounds vertices.
    polygonBounds.forEach(function (xy, i) {
      // longitude before latitude
      contentString = `(${xy.lng()}, ${xy.lat()})`;
      polygonCoordsList.push(contentString);
    });

    // convert coordinates to latlng[]...solution by Joshua DeFord on stackOverflow
    const polygon_coords = polygonCoordsList.join()

    // Surround with [] to make an outer array.
    // and replace ( and ) with [ and ] to make inner arrays
    
    const jsonArray = `[
    ${polygon_coords.replace(/\)/g, "]").replace(/\(/g, "[")}]`;
    // console.log(`Your json array: \n${jsonArray}\n`);

    // parse the coordinates list as a json array
    const parsedCoords = JSON.parse(jsonArray);
    // 
    this.fenceCoords = parsedCoords;
    // send coordinates data to the backend api as props
    this.props.func(this.fenceCoords)
  }

  watchLocation() {
    if ("geolocation" in navigator) {
      const geoOptions = {
        enableHighAccuracy: true,
        maximumAge: 30000, 
        timeout: 27000,
      };

      navigator.geolocation.watchPosition(
        this.getLocation.bind(this),
        null,
        geoOptions
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  unwatchLocation() {
    if ("geolocation" in navigator && this.state.watchID) {
      navigator.geolocation.clearWatch(this.state.watchID);
    }
  }

  getLocation(position) {
    this.setState({
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      content: `Location found.`,
      lastFetched: position.timestamp,
    });

    this.checkGeoFence();
  }

  checkGeoFence() {
    if (!this.state.fence) {
      this.setState({
        insideFence: false,
      });
      return;
    }

    const insideFence = google.maps.geometry.poly.containsLocation(
      this.getCurrentPosition(),
      this.state.fence
    );

    this.setState({
      insideFence,
    });
  }

  doneDrawing(polygon) {
    if (this.state.previousPolygon) {
      this.state.previousPolygon.setMap(null);
    }

    this.setState({ previousPolygon: polygon });

    this.setState({
      fence: new google.maps.Polygon({
        paths: polygon.getPaths(),
        fenceCoords: this.getFenceCoords(polygon),
      }),
      
    });
    this.checkGeoFence();
  }
  

  getCurrentPosition() {
    const currentPosition = new google.maps.LatLng(
      // longitude before latitude
      this.state.center.lng,
      this.state.center.lat 
    );
    console.log(currentPosition)
    return currentPosition;
  }

  render() {
    let map = null;
    let fenceStatus = null;

    if (this.state.lastFetched) {
      map = (
        <div>
          <p>
            Last fetched:{" "}
            <Moment interval={10000} fromNow>
              {this.state.lastFetched}
            </Moment>
          </p>
          <Map
            googleMapURL={googleMapURL}
            loadingElement={<p>Loading maps...</p>}
            containerElement={<div className="map-container" />}
            mapElement={<div className="map" />}
            center={this.state.center}
            content={this.state.content}
            doneDrawing={this.doneDrawing.bind(this)}
          />
        </div>
      );
    } else {
      map = <p>Getting location...</p>;
    }

    return (
      <div className="MapApp">
        {map}
        {fenceStatus}
      </div>
    );
  }
}

export default MapApp;

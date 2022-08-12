/* global google */
import React, { Component } from "react";
import Moment from "react-moment";
import Map from "./Map";
import "./App.css";

import GooglePlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


const googleMapURL = `https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAPS_API_KEY}`;

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
      center: null,
      address: '',
    };
  }

  componentDidMount() {
    this.watchLocation();
  }
  UNSAFE_componentWillUnmount() {
    this.unwatchLocation();
  } 

  // search for address
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) =>
        // console.log(
        //   "Success",
        //   latLng, 
        // )
        this.setState({
          center: { lat: latLng.lat, lng: latLng.lng },
        })
      )
      .catch((error) => console.error("Error", error));
  };

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
        maximumAge: 10000, 
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
    console.log(position)
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
    // console.log(currentPosition)
    return currentPosition;
  }

  render() {
    let map = null;
    let fenceStatus = null;
    let addressSearch = null;

    if (this.state.lastFetched) {


      // ADDRESS SEARCH

      addressSearch = (
        <GooglePlacesAutocomplete
        apiKey= {process.env.REACT_APP_MAPS_API_KEY}
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </GooglePlacesAutocomplete>
      )


      map = (
        <div>
          {addressSearch}
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

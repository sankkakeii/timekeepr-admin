import React, { useState } from "react";
import "../component/Details.scss";
import Clock from "./Clock";
import MapApp from "./Map/index";
import TimePicker from 'react-time-picker'
import axios from "axios";

const Details = (props) => {
  const [timeAndLocationData] = useState({
    clockInTime: "",
    organizationLocation: "",
    token: localStorage.getItem("token"),
  });

  const  [timeValue, onChange] = useState('00:00');

  const pullDataFromMapComponent = (data) => {
    timeAndLocationData.organizationLocation = data;
    return data; 
  }

  const handleSubmit = async (e) => {
		e.preventDefault();
    try {
			const url = "http://localhost:5000/api/client/add-location";

			
      timeAndLocationData.clockInTime = timeValue + ':00';

			await axios.put(url, timeAndLocationData, {withCredentials:true});

		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				console.log(error);
			}
		}
  }

  return (
    <div className="alldetails">
      <div className="details">
        <h1>Location Details</h1>
        <MapApp func={pullDataFromMapComponent} />
        <div>
          <TimePicker onChange={onChange} value={timeValue}  disableClock='true' />
        </div>
        <form action="/" method="get" id="form"  onSubmit={handleSubmit}>
          <button>Submit</button>
        </form>
      </div>

      <div className="rightdetails">
        <h2>Clock in Time Limit</h2>
        <Clock />
      </div>
    </div>
  );
};

export default Details;

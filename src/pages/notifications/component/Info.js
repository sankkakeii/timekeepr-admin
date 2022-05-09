import React from "react";
import "../component/Info.scss";
import Profilepix from "../component/skillup img.jfif";

const Info = () => {
  return (
    <div class="content-wrap">
      <table className="content-details">
        <br></br>
        <br></br>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
          <th>Department</th>
          <th>Time Sent</th>
          <th>Purpose</th>
          <th>Request</th>
        </tr>
        <tr>
          <td>
            <img
              src={Profilepix}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "5px",
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>11:29am</td>
          <td>To visit the hospital</td>
          <td>
            <button>Accept Request</button>
            <button>Decline Request</button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Profilepix}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "5px",
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>10:29am</td>
          <td>To visit the CEO</td>
          <td>
            <button>Accept Request</button>
            <button>Decline Request</button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Profilepix}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "5px",
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>7:29am</td>
          <td>To go to the market</td>
          <td>
            <button>Accept Request</button>
            <button>Decline Request</button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Profilepix}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "5px",
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>8:29am</td>
          <td>Travelling</td>
          <td>
            <button>Accept Request</button>
            <button>Decline Request</button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Profilepix}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "5px",
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>6:29am</td>
          <td>Attending a wedding</td>
          <td>
            <button>Accept Request</button>
            <button>Decline Request</button>
          </td>
        </tr>
        <tr>
          <td>
            <img
              src={Profilepix}
              alt="Logo"
              style={{
                height: "45px",
                width: "45px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "5px",
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>6:29am</td>
          <td>Attending a wedding</td>
          <td>
            <button>Accept Request</button>
            <button>Decline Request</button>
          </td>
        </tr>
      </table>
    </div>

    /*<div className="info">
      <ul id="five">
        <li>
          <h2>Name</h2>
        </li>
        <li>Austin Onueze</li>
        <li>Austin Onueze</li>
        <li>Austin Onueze</li>
        <li>Austin Onueze</li>
      </ul>
      <ul id="six">
        <li>
          <h2>ID</h2>
        </li>
        <li>#12324259</li>
        <li>#12324259</li>
        <li>#12324259</li>
        <li>#12324259</li>
      </ul>

      <ul id="seven">
        <li>
          <h2>Department</h2>
        </li>
        <li>Procument</li>
        <li>Procument</li>
        <li>Procument</li>
        <li>Procument</li>
      </ul>
      <ul id="eight">
        <li>
          <h2>Status</h2>
        </li>
        <li>Present</li>
        <li>Present</li>
        <li>Present</li>
        <li>Present</li>
      </ul>
      <ul id="nine">
        <li>
          <h2>Punctuality</h2>
        </li>
        <li>
          <button>See Clocking</button>
        </li>
        <li>
          <button>See Clocking</button>
        </li>
        <li>
          <button>See Clocking</button>
        </li>
        <li>
          <button>See Clocking</button>
        </li>
  </ul>*/
  );
};

export default Info;

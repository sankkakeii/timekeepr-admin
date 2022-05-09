import React from "react";
import "../component/Records.scss";
//import Record2 from "./Record2";
import Profilepix from "../component/skillup img.jfif";

const Records = (props) => {
  return (
    <div class="content-wrap">
      <table className="content-table">
        <br></br>
        <br></br>
        <tr>
          <th></th>
          <th>Name</th>
          <th>ID</th>
          <th>Department</th>
          <th>Status</th>
          <th>Punctuality</th>
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
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>Present</td>
          <td>
            <button>See Clocking</button>
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
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>Present</td>
          <td>
            <button>See Clocking</button>
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
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>Present</td>
          <td>
            <button>See Clocking</button>
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
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>Present</td>
          <td>
            <button>See Clocking</button>
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
              }}
            />
          </td>
          <td>Austin Onueze</td>
          <td>#12324259</td>
          <td>Procument</td>
          <td>Present</td>
          <td>
            <button>See Clocking</button>
          </td>
        </tr>
      </table>
    </div>

    /*<ul>
        <li>Name</li>
        <li>ID</li>
        <li>Department</li>
        <li>Status</li>
        <li>Punctuality</li>
      </ul>

      <Record2
        Name="Austin Onueze"
        ID="#12022822"
        Department="Procurement"
        Status="Present"
      />
      <Record2
        Name="Prosper Onuko"
        ID="#12890029"
        Department="Procurement"
        Status="On leave"
      />
      <Record2
        Name="Omuzor Esther"
        ID="#12890041"
        Department="Procurement"
        Status="On Suspension"
      />
      <Record2
        Name="David Emelogu"
        ID="#12890029"
        Department="Procurement"
        Status="Present"
      />
      <Record2
        Name="Emeka Ofor"
        ID="#12890061"
        Department="Procurement"
        Status="Absent"
      />
      <Record2
        Name="Funke Adeleke"
        ID="#12890081"
        Department="Procurement"
        Status="Present"
      />
  </div>*/
  );
};

export default Records;

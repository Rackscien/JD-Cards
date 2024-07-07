import React, { useState } from "react";
import {Link, NavLink} from 'react-router-dom'
export const Onboarding = () => {
  const [UserData, setUserData] = useState({
    UnitCode: "",
    UnitSPOC: "",
    ApplicationName: "",
    ApplicationType: "",
    SNOWGroup: "",
    SNOWConfigurationItem: "",
    Remarks: "",
    OnboardingStatus: "",
  });
  const [Books, setBooks] = useState("");
  const UnitCodes = [
    "AXO1-AGT",
    "CC-John Deere Arc-Les-Gray",
    "CD-John Deere Saran Works",
    "CP-John Deere Tianjin Works",
  ];

  const styl={
    display:"flex",
    alignItems:"center",
    justifyContent:"spaceBetween"
  }
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ backgroundColor: "white", height: "90vh", width: "50vw", display:"flex", alignItems:"Center", justifyContent:"center", flexDirection:"column"}}>
        <div style={{display:"flex", alignItems:"center" , justifyContent:"space-between"}}>
          <div>Unit Code</div>
          <div>
          <select
            className="form-select"
            value={UserData.UnitCode}
            onChange={(evt) =>
              setUserData({ ...UserData, UnitCode: evt.target.value })
            }
            placeholder="Find items"
          >
            {UnitCodes.map((val) => {
              return <option value={val} >{val}</option>;
            })}
          </select>
          </div>
          
        </div>
        <div style={styl}>
          <label>Unit SPOC</label>
          <select
            className="form-select"
            value={UserData.UnitCode}
            onChange={(evt) =>
              setUserData({ ...UserData, UnitCode: evt.target.value })
            }
          >
            {UnitCodes.map((val) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
        </div>
        <div style={styl}>
          <label>Application Name</label>
          <input type="text"/>
        </div>
        <div>
          <label>Application Type</label>
          <select
            className="form-select"
            value={UserData.UnitCode}
            onChange={(evt) =>
              setUserData({ ...UserData, UnitCode: evt.target.value })
            }
          >
            {UnitCodes.map((val) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
        </div >
        <div style={styl}>
          <label>SNOW group</label>
          <div>
          <input type="text"/>
          {/* <NavLink to="">Validate SNOW group</NavLink> */}
          {/* <Link></Link> */}
          </div>
          
        </div>
        <div style={styl}>
          <label>SNOW Configuration Item</label>
          <div>
          <input type="text"/>
          {/* <NavLink to="">Validate SNOW group</NavLink> */}
          {/* <Link></Link> */}
          </div>
          
        </div>
        <div style={styl}>
          <label>Remarks</label>
          <input type="textarea"/>
        </div>
        <div style={styl}>
          <label>Application Type</label>
          <select
            className="form-select"
            value={UserData.UnitCode}
            onChange={(evt) =>
              setUserData({ ...UserData, UnitCode: evt.target.value })
            }
          >
            {UnitCodes.map((val) => {
              return <option value={val}>{val}</option>;
            })}
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

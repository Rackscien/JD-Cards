import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button,Select, Option } from "@deere/fuel-react";
// import  Select  from "react-select";
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

export const Onboarding2 = () => {
  const [UserData, setUserData] = useState({
    UnitCode: "",
    UnitSPOC: {
      name: "",
      email: "",
    },
    ApplicationName: "",
    ApplicationType: "",
    SNOWGroup: "",
    SNOWConfigurationItem: "",
    Remarks: "",
    OnboardingStatus: "",
  });
  const [submitData, setSubmitData] = useState([]);

  const submit = () => {
    setSubmitData([...submitData, UserData]);
    console.log(submitData);
  };
  const [Books, setBooks] = useState("");
  const UnitCodes = [
    "Find items",
    "AXO1-AGT",
    "CC-John Deere Arc-Les-Gray",
    "CD-John Deere Saran Works",
    "CP-John Deere Tianjin Works",
    "AXO1-AGT",
    "CC-John Deere Arc-Les-Gray",
    "CD-John Deere Saran Works",
    "CP-John Deere Tianjin Works",
    "AXO1-AGT",
    "CC-John Deere Arc-Les-Gray",
    "CD-John Deere Saran Works",
    "CP-John Deere Tianjin Works",
  ];
  const UnitSpoc = [
    {
      name: "Find Item"
    },
    {
      name: "Ankit",
      email: "a@a.gmail.com",
    },
    {
      name: "Ameer",
      email: "Am@am.com",
    },
    {
      name: "Arti",
      email: "Ar@ar.com",
    },
    {
      name: "Anabhra",
      email: "an@an.com",
    },
  ];
  useEffect(() => {
    console.log(UserData);
  }, [UserData]);


  const [selectedOption,setSelectedOptions]=useState(null)
  const handleChange=(selectedOption)=>{
    setSelectedOptions(selectedOption);
  }
  return (
    <div
      style={{
        // backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "cenetr",
        }}
      >
        <div>
          <TableContainer
            component={Paper}
            style={{
              width: "40vw",
              height: "80vh",
              borderRadius: "0",
              boxShadow: "0 0",
            }}
          >
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                  //   key={row.name}
                  style={{
                    borderRadius: "0",
                    boxShadow: "0",
                    borderTop: "0px",
                  }}
                >
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> Unit Code</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    

                     <select
                      className="form-select"
                      value={UserData.UnitCode}
                      onChange={(evt) =>
                         setUserData({ ...UserData, UnitCode: evt.target.value })
                       }
                      placeholder="Find items"
                       style={{ width: "70%", height: "30px" }}
                     >
                       {UnitCodes.map((val) => {
                         return <option value={val}>{val}</option>;
                       })}
                 </select> 
                  </TableCell>
                </TableRow>
                <TableRow
                  //   key={row.name}
                  style={{ borderTop: "0" }}
                >
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> Unit SPOC</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    {/* <Select
                      ref={{
                        current: "[Circular]",
                      }}
                      hasSearch
                    //   id="Films"
                    //   name="Films"
                    //   onChange={function Ga() {}}
                    value={UserData.UnitSPOC}
                    onChange={(evt) =>
                      setUserData({ ...UserData, UnitSPOC: evt.target.value })
                    }
                    size="small"
                    >
                      <Option value="the-sting">The Sting</Option>
                      <Option value="the-matrix">The Matrix</Option>
                      <Option value="spirited-away">Spirited Away</Option>
                      <Option value="paths-of-glory">Paths of Glory</Option>
                      <Option value="the-shining">The Shining</Option>
                      <Option value="the-godfather-part-ii">
                        The Godfather: Part II
                      </Option>
                      <Option value="citizen-kane">Citizen Kane</Option>
                      <Option value="star-wars-episode-v-the-empire-strikes-back">
                        Star Wars: Episode V - The Empire Strikes Back
                      </Option>
                      <Option value="princess-mononoke">
                        Princess Mononoke
                      </Option>
                      <Option value="forrest-gump">Forrest Gump</Option>
                    </Select> */}

                     <select
                      style={{ width: "70%", height: "30px" }}
                      className="form-select"
                      value={UserData.UnitSPOC.email}
                      onChange={(evt) =>
                        setUserData({ ...UserData, UnitSPOC: evt.target.value })
                      }
                      placeholder="Find items"
                    >
                      {UnitSpoc.map((val) => {
                        return (
                          <option value={val}>
                            <div>{val.name}</div>
                            <br />
                            <div>{val.email}</div>
                          </option>
                        );
                      })}
                    </select> 
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> Application Name</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    <input
                      style={{ width: "70%", height: "30px" }}
                      type="text"
                      value={UserData.ApplicationName}
                      onChange={(e) => {
                        setUserData({
                          ...UserData,
                          ApplicationName: e.target.value,
                        });
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> Application Type</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    <select
                      style={{ width: "70%", height: "30px" }}
                      className="form-select"
                      value={UserData.ApplicationType}
                      onChange={(evt) =>
                        setUserData({
                          ...UserData,
                          ApplicationType: evt.target.value,
                        })
                      }
                    >
                      <option value="">Find Items</option>
                      <option value="MQTT (Pub-sub mode)">
                        MQTT (Pub-sub mode)
                      </option>
                      <option value="AMQP (Queue)">AMQP (Queue)</option>
                      <option value="MQTT+AMPQ">MQTT+AMPQ</option>
                    </select>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> SNOW group</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    <input
                      style={{ width: "70%", height: "30px" }}
                      type="text"
                      value={UserData.SNOWGroup}
                      onChange={(e) => {
                        setUserData({ ...UserData, SNOWGroup: e.target.value });
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="left">
                    <label>  Remarks</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    <textarea
                      style={{ width: "70%", height: "30px" }}
                      type="text"
                      value={UserData.Remarks}
                      onChange={(e) => {
                        setUserData({ ...UserData, Remarks: e.target.value });
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> SNOW Configuration Item</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    <input
                      style={{ width: "70%", height: "30px" }}
                      type="text"
                      value={UserData.SNOWConfigurationItem}
                      onChange={(e) => {
                        setUserData({
                          ...UserData,
                          SNOWConfigurationItem: e.target.value,
                        });
                      }}
                    />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell align="left">
                    <label><span style={{color:"red"}}>*</span> Onboarding Status</label>
                  </TableCell>
                  <TableCell align="left" style={{ padding: "0" }}>
                    <select
                      style={{ width: "70%", height: "30px" }}
                      className="form-select"
                      value={UserData.OnboardingStatus}
                      onChange={(evt) =>
                        setUserData({
                          ...UserData,
                          OnboardingStatus: evt.target.value,
                        })
                      }
                    >
                      <option value="">Find Items</option>;
                      <option value="New Request">New Request</option>;
                      <option value="In Progress">In Progress</option>;
                      <option value="Completed">Completed</option>;
                      <option value="Parked">Parked</option>;
                      <option value="Need Additional info">
                        Need Additional info
                      </option>
                      ;
                      <option value="Request Rejected">Request Rejected</option>
                      ;
                    </select>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <Button
            size="medium"
            variant="primary"
            style={{ marginBottom: "16px" }}
            onClick={() => submit()}
          >
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

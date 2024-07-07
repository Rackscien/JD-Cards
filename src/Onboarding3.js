import React, { useState, useEffect } from "react";
import { Grid, Box, Option, Select } from "@deere/fuel-react";
const Onboarding3 = () => {
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
          width: "40vw",
          height: "80vh",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "cenetr",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <label>Unit Code</label>
          </Grid>
          <Grid item xs={6}>
            <Select
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
              style={{width:"20px"}}
            >
                {
                    UnitCodes.map((val)=>{
                        return (<Option value={val}>{val}</Option>)
                    })
                }
              <Option value="the-sting" style={{width:"20px"}}>The Sting</Option>
              <Option value="the-matrix">The Matrix</Option>
              <Option value="spirited-away">Spirited Away</Option>
              <Option value="paths-of-glory">Paths of Glory</Option>
              <Option value="the-shining">The Shining</Option>
            
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Box p={4}>xs=12 sm=6</Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={4}>xs=6 sm=3</Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={4}>xs=6 sm=3</Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={4}>xs=6 sm=3</Box>
          </Grid>
          <Grid item xs={6}>
            <Box p={4}>xs=6 sm=3</Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Onboarding3;

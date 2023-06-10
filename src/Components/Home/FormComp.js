// import { useDispatch } from "react-redux";
// import { clinicAction } from "../../store/clinic";
// import { Button } from "@mui/material";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { CountriesEn } from "../../assets/selecterData";
import { syrianCities } from "../../assets/selecterData";
import { specializedMedicalClinics } from "../../assets/selecterData";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export default function FormComp(props) {
  const { setDataToFather } = props;
  const { isClicked } = props;

  // ........................................................
  // const dispatch = useDispatch();

  // ........................................................

  const [clinicValues, setClinicValues] = useState({
    clinicName: "",
    specialty: "",
    country: "",
    city: "",
    region: "",
    district: "",
    street: "",
  });
  useEffect(() => {
    setDataToFather(clinicValues);
  }, [clinicValues]);

  const handleChangeName = (event) => {
    setClinicValues({
      ...clinicValues,
      clinicName: event.target.value,
    });
  };
  const handleChangeSpecialty = (event) => {
    setClinicValues({
      ...clinicValues,
      specialty: event.target.value,
    });
  };
  const handleChangeCountry = (event) => {
    setClinicValues({
      ...clinicValues,
      country: event.target.value,
    });
  };
  const handleChangeCity = (event) => {
    setClinicValues({
      ...clinicValues,
      city: event.target.value,
    });
  };
  const handleChangeRegion = (event) => {
    setClinicValues({
      ...clinicValues,
      region: event.target.value,
    });
  };
  const handleChangeDistrict = (event) => {
    setClinicValues({
      ...clinicValues,
      district: event.target.value,
    });
  };
  const handleChangeStreet = (event) => {
    setClinicValues({
      ...clinicValues,
      street: event.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Data Full");
  //...........................................................
  // dispatch(
  //   clinicAction.save({
  //     clinicName: clinicValues.clinicName,
  //     country: clinicValues.country,
  //     city: clinicValues.city,
  //     // phoneNumber,
  //     // availableHours,
  //     // restTimes,
  //   })
  // );
  //...........................................................

  //   console.log(clinicValues);

  //   setClinicValues({
  //     clinicName: "",
  //     specialty: "",
  //     country: "",
  //     city: "",
  //     region: "",
  //     district: "",
  //     street: "",
  //   });
  //   console.log("Data Empty");
  //   console.log(clinicValues);

  //   return;
  // };

  return (
    <>
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
          maxWidth: "60%",
        }}
      >
        <Container component="main">
          <Box component="form" sx={{ mt: 3 }}>
            <Grid item xs={12} sm={6}>
              <img
                src={require("../../assets/Images/Vector.png")}
                alt="Profile"
              />
              {/* <Typography
                component="span"
                variant="subtitle1"
                
              >
                Clinics
              </Typography> */}

              <Typography component="span">
                <spam style={{ textDecoration: "underline", marginLeft: "2%" }}>
                  Clinics
                </spam>
                <span style={{ marginLeft: "1%", marginRight: "1%" }}>
                  &gt;
                </span>
                <spam
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "32px",
                    lineHeight: "39px",
                  }}
                >
                  Clinics 1{" "}
                </spam>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <p
                style={{
                  fontFamily: "Montserrat",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                }}
              >
                Basic Info
              </p>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Clinic Name"
                  value={clinicValues.clinicName}
                  onChange={handleChangeName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-specialty"
                  select
                  fullWidth
                  required
                  label="Specialty"
                  value={clinicValues.specialty}
                  onChange={handleChangeSpecialty}
                >
                  {specializedMedicalClinics.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-country"
                  select
                  fullWidth
                  required
                  label="Country"
                  value={clinicValues.country}
                  onChange={handleChangeCountry}
                >
                  {CountriesEn.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-select-city"
                  select
                  fullWidth
                  required
                  label="City"
                  value={clinicValues.city}
                  onChange={handleChangeCity}
                >
                  {syrianCities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <TextField
                  id="region"
                  fullWidth
                  required
                  label="Region"
                  type="text"
                  value={clinicValues.region}
                  onChange={handleChangeRegion}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  id="district"
                  fullWidth
                  required
                  label="District"
                  type="text"
                  value={clinicValues.district}
                  onChange={handleChangeDistrict}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  required
                  id="Street"
                  label="Street"
                  type="text"
                  value={clinicValues.street}
                  onChange={handleChangeStreet}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Card>
    </>
  );
}

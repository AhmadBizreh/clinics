import { useDispatch } from "react-redux";
import { clinicAction } from "../../store/clinic";
import { hoursAction } from "../../store/hours";

import { useState } from "react";
import AppBarPage from "../AppBarPage";
import FormComp from "../../Components/Home/FormComp";
import AvailableHoursComp from "../../Components/Home/AvailableHoursComp";
import MapComp from "../../Components/Home/MapComp";
import FooterPage from "../FotterPage";

import Button from "@mui/material/Button";

function HomePage() {
  const dispatch = useDispatch();
  const [isClicked, setIsClicket] = useState(false);
  const [formData, setFormData] = useState();
  const [phoneData, setPhoneData] = useState();
  const [dateData, setDateData] = useState();
  const handleDataForm = (data) => {
    setFormData(data);
  };
  const handlePhoneDate = (data) => {
    setPhoneData(data);
  };
  const handleDataDate = (data) => {
    setDateData(data);
  };

  const SubmitHanler = (e) => {
    e.preventDefault();
    setIsClicket(true);
    console.log(formData);
    console.log(phoneData);
    console.log(dateData);
    dispatch(
      clinicAction.save({
        clinicName: formData.clinicName,
        country: formData.country,
        city: formData.city,
        phoneNumber: phoneData,
      })
    );
    dispatch(
      hoursAction.setHours({
        hours: dateData,
      })
    );
    window.location.reload();
  };
  return (
    <>
      <AppBarPage />
      <div style={{ marginLeft: "2.2%" }}>
        <FormComp setDataToFather={handleDataForm} isClicked={isClicked} />

        <MapComp setDataToFather={handlePhoneDate} isClicked={isClicked} />
        <AvailableHoursComp
          setDataToFather={handleDataDate}
          isClicked={isClicked}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          color="info"
          style={{
            display: "flex",
            marginLeft: "2%",
            width: "15%",
          }}
          onClick={SubmitHanler}
        >
          Save
        </Button>
      </div>
      <FooterPage />
    </>
  );
}

export default HomePage;

import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

function MapComp(props) {
  const { setDataToFather } = props;
  const { isClicked } = props;

  const [phoneNumber, setPhoneNumber] = useState();
  useEffect(() => {
    setDataToFather(phoneNumber);
  }, [phoneNumber]);

  const handleChangeName = (event) => {
    setPhoneNumber(event.target.value);
  };
  return (
    <>
      <Grid item xs={12} sm={6}>
        <img
          src={require("../../assets/Images/map.png")}
          alt="Map"
          style={{
            width: "73%",
            height: "auto",
            maxWidth: "73%",
            display: "block",
            marginTop: "1%",
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} style={{ maxWidth: "27%", marginLeft: "1.5%" }}>
        <TextField
          id="phone-number"
          label="Phone Number"
          fullWidth
          type="number"
          required
          onChange={handleChangeName}
        />
      </Grid>
    </>
  );
}

export default MapComp;

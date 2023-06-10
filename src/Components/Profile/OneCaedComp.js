import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const OneCaedComp = () => {
  const clinicName = useSelector((state) => state.clinicValuesStore.clinicName);
  const country = useSelector((state) => state.clinicValuesStore.country);
  const city = useSelector((state) => state.clinicValuesStore.city);
  const phoneNumber = useSelector(
    (state) => state.clinicValuesStore.phoneNumber
  );
  const hours = useSelector((state) => state.hoursStore.hours);

  return (
    <>
      <span style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "10px" }}>My Clinics</h1>
        <Link to="" title="Add Clinic" style={{ color: "#34AFE0" }}>
          + Add Clinic
        </Link>
      </span>

      <Card
        style={{ backgroundColor: "#F2F2F2", maxWidth: "700px" }}
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200, height: 100, mt: 2 }}
          image={require("../../assets/Images/supMap.png")}
          alt="map"
        />
        <CardContent
          sx={{ flex: 1, flexDirection: { xs: "column" }, maxWidth: "40%" }}
        >
          <Typography component="h2" variant="h5">
            {clinicName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {country},{city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Available Hours: 9:00 AM - 5:00 PM <br />
            Rest Time: 12:00 PM - 1:00 PM
          </Typography>
          <Typography sx={{ mt: 1.5 }}>
            <Link href="#" variant="body2">
              Appointment Times
            </Link>
          </Typography>
          <Typography sx={{ mt: 1.5 }}>
            <Link href="#" variant="body2">
              Or Book by Number: {phoneNumber}
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default OneCaedComp;

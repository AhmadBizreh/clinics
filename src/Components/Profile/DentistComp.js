import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const DentistComp = () => {
  return (
    <Container
      style={{
        backgroundColor: "#63CBE91A",
        maxWidth: "100%",
        height: "250px",
      }}
    >
      <Grid
        container
        
        alignItems="center"
        style={{ height: "100%" }}
      >
        <Grid>
          <Avatar
            sx={{ width: 120, height: 120 }}
            alt="profile picture"
            src={require("../../assets/Images/Profile.png")}
          />
        </Grid>
        <Grid sx={{ml: 2}}>
          <Typography variant="h5">Dr. Ahmed Khaled</Typography>
          <Typography variant="h10" style={{ color: "#828282" }}>
            Dentist
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentistComp;

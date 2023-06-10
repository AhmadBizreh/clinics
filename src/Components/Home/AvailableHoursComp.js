import { useEffect } from "react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import InputLabel from "@mui/material/InputLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function AvailableHoursComp(props) {
  const { setDataToFather } = props;
  const { isClicked } = props;

  const [hours, setHours] = useState({
    Sunday: { from: "", to: "", restFrom: "", restTo: "" },
    Monday: { from: "", to: "", restFrom: "", restTo: "" },
    Tuesday: { from: "", to: "", restFrom: "", restTo: "" },
    Wednesday: { from: "", to: "", restFrom: "", restTo: "" },
    Thursday: { from: "", to: "", restFrom: "", restTo: "" },
    Friday: { from: "", to: "", restFrom: "", restTo: "" },
    Saturday: { from: "", to: "", restFrom: "", restTo: "" },
  });
  useEffect(() => {
    setDataToFather(hours);
  }, [hours]);

  const handleHoursChange = (day, field, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        [field]: value,
      },
    }));
  };
  const StyledSelect = styled(Select)(({ theme }) => ({
    width: "100px",

    "& .MuiSelect-icon": {
      color: "#34AFE0",
    },
  }));

  return (
    <div style={{ marginTop: "3%", marginLeft: "2%" }}>
      <span
        style={{
          fontFamily: "Montserrat",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "20px",
        }}
      >
        Available Hours
      </span>
      <TableContainer
        component={Paper}
        style={{
          width: "73%",
          height: "auto",
          maxWidth: "72%",
          display: "block",
          marginTop: "1%",
        }}
      >
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#828282" }}>Days</TableCell>
              <TableCell style={{ color: "#828282" }}>From</TableCell>
              <TableCell style={{ color: "#828282" }}>To</TableCell>
              <TableCell style={{ color: "#828282" }}>Rest Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {daysOfWeek.map((day) => (
              <TableRow key={day}>
                <TableCell>{day}</TableCell>
                <TableCell>
                  <FormControl>
                    <InputLabel>- </InputLabel>
                    <StyledSelect
                      value={hours[day].from}
                      onChange={(event) =>
                        handleHoursChange(day, "from", event.target.value)
                      }
                      IconComponent={ExpandMoreIcon}
                    >
                      <MenuItem value="">--</MenuItem>
                      <MenuItem value="09:00">09:00</MenuItem>
                      <MenuItem value="10:00">10:00</MenuItem>
                      <MenuItem value="11:00">11:00</MenuItem>
                    </StyledSelect>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <FormControl>
                    <InputLabel>- </InputLabel>

                    <StyledSelect
                      value={hours[day].to}
                      onChange={(event) =>
                        handleHoursChange(day, "to", event.target.value)
                      }
                    >
                      <MenuItem value="">--</MenuItem>
                      <MenuItem value="17:00">17:00</MenuItem>
                      <MenuItem value="18:00">18:00</MenuItem>
                      <MenuItem value="19:00">19:00</MenuItem>
                    </StyledSelect>
                  </FormControl>
                </TableCell>
                <TableCell style={{ display: "flex" }}>
                  <FormControl style={{ marginRight: "10px" }}>
                    <InputLabel>From </InputLabel>
                    <StyledSelect
                      value={hours[day].restFrom}
                      onChange={(event) =>
                        handleHoursChange(day, "restFrom", event.target.value)
                      }
                    >
                      <MenuItem value="">--</MenuItem>
                      <MenuItem value="01:00">01:00</MenuItem>
                      <MenuItem value="02:00">02:00</MenuItem>
                      <MenuItem value="03:00">03:00</MenuItem>
                    </StyledSelect>
                  </FormControl>
                  <FormControl style={{ marginLeft: "10px" }}>
                    <InputLabel>To </InputLabel>
                    <StyledSelect
                      value={hours[day].restTo}
                      onChange={(event) =>
                        handleHoursChange(day, "restTo", event.target.value)
                      }
                    >
                      <MenuItem value="">--</MenuItem>
                      <MenuItem value="17:00">4:00</MenuItem>
                      <MenuItem value="18:00">5:00</MenuItem>
                      <MenuItem value="19:00">6:00</MenuItem>
                    </StyledSelect>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AvailableHoursComp;

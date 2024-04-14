"use client";
import { useState } from "react";
import Styles from "./page.module.css";
import CreateEvent from "./event";
import Swal from "sweetalert2";
import Loader from "@/app/loader/page";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import { Dialog, DialogContent, TextField } from "@mui/material";

export default function Event({UserId}) {
  const containerStyle = {
    width: "100%",
  };
  const [loadeer, loadderevalue] = useState(false);
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [digitalInvite, setDigitalInvite] = useState(false);
  const [value, setValue] = useState(dayjs(""));
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [location_, setLocation_] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [mapLink , setmapLink] = useState("");

  const handleGenerateQRCode = async () => {
    // Storing data
    loadderevalue(true);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    let date = value["$D"];
    let month = value["$M"]+1;
    let year = value["$y"];
    console.log(date,month,year,"-");
    const message = await CreateEvent(
      eventName.split(" ").join("_"),
      date,
      month,
      year,
      location,
      brideName,
      groomName,
      location_,
      youtubeLink,
      mapLink
    );
    console.log(message);
    Toast.fire({
      icon: message.icon,
      title: message.message,
    });
    loadderevalue(false);

    if (message.icon === "success") {
      const name = eventName.split(" ").join("_")
      window.location = `/qrcode/${UserId}-${name}`;
      return;
    }
    
  };
  const handleCheckboxChange = (e) => {
    setDigitalInvite(e.target.checked);
    if (e.target.checked) {
      setOpen(true);
    }
  };

  // Broom Div
  const [open, setOpen] = useState(false);

  const handleToggleDialog = () => {
    setOpen(!open);
  };

  const handleSave = () => {
    setOpen(false);
  };

  return (
    <>
      {loadeer ? <Loader /> : ""}

      {/* Rewrite */}
      <div className={Styles.evePage}>
        <div className={Styles.eveformCon}>
          <div className={Styles.eveDiv}>
            <pre className={Styles.pre} style={{ fontFamily: "Poppins" }}>
              Event Name :
            </pre>
            <div style={containerStyle}>
              <input
                type="text"
                id={Styles.eveinput}
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>
          </div>
          <div className={Styles.eveDiv}>
            <pre className={Styles.pre} style={{ fontFamily: "Poppins" }}>
              Event Date :
            </pre>
            <div className={Styles.datePicker} style={containerStyle}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                    console.log(newValue);
                  }}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div className={Styles.eveDiv}>
            <pre className={Styles.pre} style={{ fontFamily: "Poppins" }}>
              Location :
            </pre>
            <div style={containerStyle}>
              <input
                type="text"
                id={Styles.eveinput}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={Styles.checkBoxCon}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked={digitalInvite}
                  onChange={handleCheckboxChange}
                />
              }
              label="Digital Invite"
            />
          </FormGroup>
          <div className={Styles.genDiv}>
            <button className={Styles.genbtn} onClick={handleGenerateQRCode}>
              Generate QR Code
            </button>
          </div>
        </div>
        <div className={Styles.dialogDiv}>
          {/* <Dialog open={open} onClose={handleToggleDialog}>
            <DialogContent
              sx={{ boxShadow: "0px 4px 8px rgba(30, 39, 66, 0.5)" }}
              className={Styles.dialogbox}
            > */}
          {
            open && 
            <div className={Styles.dialogBackdrop}>
              <div className={Styles.maincrtDiv}> 
                <TextField id="event-name" label="Bride Name" variant="outlined" fullWidth margin="normal" className={Styles.diaInp} value={brideName} onChange={(e) => setBrideName(e.target.value)}/>
                <TextField id="event-date" label="Groom Name" variant="outlined" fullWidth margin="normal" className={Styles.diaInp} value={groomName} onChange={(e) => setGroomName(e.target.value)}/>
                <TextField id="location" label="Location" variant="outlined" fullWidth margin="normal" className={Styles.diaInp} value={location_} onChange={(e) => setLocation_(e.target.value)}/>
                <TextField id="map-link" label="Map Link (Optional)" variant="outlined" fullWidth margin="normal" className={Styles.diaInp} value={mapLink} onChange={(e) => setmapLink(e.target.value)}/>
                <TextField id="additional-info" label="YouTube Link (Optional)" variant="outlined" fullWidth margin="normal" className={Styles.diaInp} value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)}/>
                <div className={Styles.btndiv}>
                  <button className={Styles.savebtn} onClick={handleSave}>Save</button>
                </div>
              </div>
            </div>
          }
            {/* </DialogContent>
          </Dialog> */}
        </div>
      </div>
    </>
  );
}

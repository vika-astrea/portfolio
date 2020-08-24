import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React, { useState } from "react";
import Header from "../components/Header";
import nadia_color from "../images/nadia_color.mp4";
import nadia_lines from "../images/nadia_lines.mp4";
import header from "../images/videos_header.png";

export default function Multimedia() {
  const [state, setState] = useState(nadia_color);

  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360,
      color: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();

  return (
    <div
      style={{
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Header src={header} />
      <div style={{ display: "flex" }}>
        <video src={state} width="640" height="360" controls>
          {" "}
          video not supported
        </video>
        <br />
        <br />
        <div className={classes.root}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button onClick={() => setState(nadia_lines)}>
              <ListItemIcon>
                <PlayCircleFilledIcon />
              </ListItemIcon>
              <ListItemText primary="The Arcana Nadia Speedpaint pt. 1" />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setState(nadia_color)}>
              <ListItemIcon>
                <PlayCircleFilledIcon />
              </ListItemIcon>
              <ListItemText primary="The Arcana Nadia Sppedpaint pt.2" />
            </ListItem>
          </List>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

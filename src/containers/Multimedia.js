import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React, { useState } from "react";
import Header from "../components/Header";
import header from "../images/videos_header.png";
import ReactPlayer from "react-player";

export default function Multimedia() {
const nadia_color="https://www.youtube.com/watch?v=sZBLzDKZ4U4&t=4s"
const nadia_lines="https://www.youtube.com/watch?v=-Y0w2xf6BTU&t=18s"

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
       <ReactPlayer url={state}/>
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

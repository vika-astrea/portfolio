import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import imgData from "../imgData";

//Gridlist
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 1500,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

//Modal
const useStylesModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "700px",
    margin: "0 auto",
  },
  img: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "600px",
    margin: "0 auto",
  },
}));

export default function ImgGallery() {
  const classes = useStyles();

  const classesModal = useStylesModal();
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={500} className={classes.gridList}>
        {imgData.map((tile, tileIndex) => {
          if (open && index === tileIndex) {
            return (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  onClick={() => {
                    setOpen(true);
                    setIndex(tileIndex);
                  }}
                />
                <GridListTileBar title={tile.title} subtitle={tile.type} />
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classesModal.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classesModal.paper}>
                      <img
                        src={tile.img}
                        alt={tile.title}
                        className={classesModal.img}
                      />
                    </div>
                  </Fade>
                </Modal>
              </GridListTile>
            );
          } else {
            return (
              <GridListTile key={tile.img}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  onClick={() => {
                    setOpen(true);
                    setIndex(tileIndex);
                  }}
                />
                <GridListTileBar title={tile.title} subtitle={tile.type} />
              </GridListTile>
            );
          }
        })}
      </GridList>
    </div>
  );
}

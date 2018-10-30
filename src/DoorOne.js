import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import HexQuiz from "./HexQuiz";
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import bg3 from "./bg3.jpg";
import bg4 from "./bg4.jpg";
import bg5 from "./bg5.jpg";
import bg6 from "./bg6.jpg";
import bg7 from "./bg7.jpg";
import bg8 from "./bg8.jpg";
import bg9 from "./bg9.jpg";

const styles = {
  appBar: {
    position: "relative",
    backgroundImage: `url(${bg1})`
  },
  title: {
    color: "#333",
    fontFamily: "Impact",
    WebkitTextStroke: "1px #777"
  },
  flex: {
    flex: 1
  },
  body: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg1})`
  }
};

function Transition(props) {
  let directions = ["right", "left", "up", "down"];
  let pic = Math.floor(Math.random() * 3);

  let times = {
    //can't figure out how to slow it down
    enter: 5000,
    exit: 2000
  };
  return <Slide timeout={times} direction={directions[pic]} {...props} />;
}

class DoorOne extends React.Component {
  state = {
    open: false
  };

  componentWillMount = () => {
    setTimeout(() => {
      this.setState({ open: true });
    }, this.props.openTime);
  };

  handleClose = () => {
    if (this.state.open) {
      this.setState({ open: false });
    }
  };

  render() {
    console.log("door props");
    console.log(this.props.puzzle);
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar elevation={24} className={classes.appBar}>
            <Typography className={classes.title} variant="h2">
              Door #1
            </Typography>
          </AppBar>
          <div className={classes.body}>{this.props.puzzle}</div>
        </Dialog>
      </div>
    );
  }
}

DoorOne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DoorOne);

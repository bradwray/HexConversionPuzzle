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
import bg2 from "./bg6.jpg";

const styles = {
  appBar: {
    position: "relative",
    backgroundImage: `url(${bg1})`
  },
  flex: {
    flex: 1
  },
  body: {
    backgroundImage: `url(${bg2})`
  }
};

function Transition(props) {
  let directions = ["right", "left", "up", "down"];
  let pic = Math.floor(Math.random() * 3);
  console.log(pic);
  return <Slide direction={directions[pic]} {...props} />;
}

class DoorOne extends React.Component {
  state = {
    open: false
  };

  componentWillMount = () => {
    setTimeout(() => {
      this.setState({ open: true });
    }, 500);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
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
            <Toolbar />
          </AppBar>
          <div className={classes.body}>
            <HexQuiz />
          </div>
        </Dialog>
      </div>
    );
  }
}

DoorOne.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DoorOne);

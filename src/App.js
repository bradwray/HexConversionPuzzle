import React from "react";
import ReactDOM from "react-dom";
import babyDucks from "./babyDucks.gif";
import DoorOne from "./DoorOne.js";
import DoorTwo from "./DoorTwo.js";
import DoorThree from "./DoorThree.js";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  ducks: {
    position: "relative",
    marginRight: "auto",
    width: "100%"
  }
};

class App extends React.Component {
  state = {};

  componentWillMount = () => {};

  render = styles => {
    const { classes } = this.props;
    return (
      <div>
        {/**/}
        <img className={classes.ducks} src={babyDucks} />
        <DoorThree />
        <DoorTwo />
        <DoorOne />
      </div>
    );
  };
}
export default withStyles(styles)(App);

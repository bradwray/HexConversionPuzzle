import React from "react";
import ReactDOM from "react-dom";
import babyDucks from "./babyDucks.gif";
import DoorOne from "./DoorOne.js";
import DoorTwo from "./DoorTwo.js";
import DoorThree from "./DoorThree.js";
import DecToBinary from "./DecToBinary.js";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  ducks: {
    position: "relative",
    marginRight: "auto",
    width: "100%"
  }
};

class App extends React.Component {
  state = {
    doorTimer: [1000, 1700, 2400],
    developing: true
  };

  componentWillMount = () => {};

  render = styles => {
    const { classes } = this.props;
    return (
      <div>
        {/**/}
        <img className={classes.ducks} src={babyDucks} />
        <DoorThree 
        developing={this.state.developing}
        openTime={this.state.doorTimer[2]}/>
        <DoorTwo 
        developing={this.state.developing} 
        openTime={this.state.doorTimer[1]}/>
        <DoorOne 
        developing={this.state.developing} 
        openTime={this.state.doorTimer[0]}/>
      </div>
    );
  };
}
export default withStyles(styles)(App);

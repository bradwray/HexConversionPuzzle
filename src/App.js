import React from "react";
import ReactDOM from "react-dom";
import babyDucks from "./babyDucks.gif";
import DoorOne from "./DoorOne.js";
import DoorTwo from "./DoorTwo.js";
import DoorThree from "./DoorThree.js";
import DecToBinary from "./DecToBinary.js";
import HexQuiz from "./HexQuiz";
import Colors from "./Colors";
import HexToBinary from "./HexToBinary";
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
    //wrap each one of these in a generic door component that can generate a random background
    //this will help decrease code duplication
    doors: [
      {
        time: 2400,
        puzzle: <HexQuiz />
      },
      {
        time: 1000,
        puzzle: <DecToBinary />
      },
      {
        time: 700,
        puzzle: <HexToBinary />
      }
    ],
    developing: true
  };

  handleClose = () => {
    console.log("yup");
  };

  componentWillMount = () => {};

  showDoors = () => {
    return this.state.doors.map((door, key) => {
      return (
        <div>
          <DoorOne doorNum={key} puzzle={door.puzzle} openTime={door.time} />
        </div>
      );
    });
  };

  render = styles => {
    const { classes } = this.props;
    return (
      <div>
        {/**/}
        <img className={classes.ducks} src={babyDucks} />
        {this.showDoors()}
      </div>
    );
  };
}
export default withStyles(styles)(App);

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "400px"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100px"
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 100
  }
});

class HexQuiz extends React.Component {
  state = {
    answer: " ",
    nums: []
  };

  componentWillMount = () => {
    let tempArr = [];
    for (let i = 0; i < 9; i++) {
      tempArr[i] = {
        num: Math.floor(Math.random() * 15),
        ans: " "
      };
    }
    this.setState({ nums: tempArr });
  };

  handleChange = index => event => {
    console.log(event.target.value);
    let tempArr = this.state.nums;
    tempArr[index].ans = event.target.value;
    this.setState({
      nums: tempArr
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);
    return (
      <form className={classes.container} noValidate autoComplete="off">
        {this.state.nums.map((item, index) => {
          let instructions = "convert " + item.num + " to hex";
          return (
            <div>
              <TextField
                id={index}
                label={instructions}
                className={classes.textField}
                value={this.state.nums[index].ans}
                onChange={this.handleChange(index)}
                margin="normal"
                variant="outlined"
              />
            </div>
          );
        })}
      </form>
    );
  }
}

HexQuiz.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HexQuiz);

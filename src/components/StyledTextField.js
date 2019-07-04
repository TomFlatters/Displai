import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
  },
  textField: {
    width: "25vw",
  },

  cssLabel: {
    color : `black !important`,
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
        color : `${theme.palette.secondary.main} !important`,
      borderColor: `${theme.palette.secondary.main} !important`,
    }
  },

  cssFocused: {
    color : `${theme.palette.secondary.main} !important`,
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: `${theme.palette.secondary.light} !important`
  },

});

class StyledTextField extends React.Component {
  state = {
    name: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label={this.props.inputname}
          className={classes.textField}
          value={this.props.inputvalue}
          onChange={this.props.oninputchange}
          margin="normal"
          variant="outlined"
          placeholder=""
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
            inputMode: "numeric"
          }}
        />
      </form>
    );
  }
}

StyledTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledTextField);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  cssLabel: {
    color : `${theme.palette.secondary.light} !important`,
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
    name: 'InputMode',
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
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
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

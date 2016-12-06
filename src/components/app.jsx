import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: '',
    };
  }

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen.bind(this)} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          //onRequestClose={this.handleClose.bind(this)}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
  }
}
import React, { Component } from "react";
import AppContext from '../AppContext';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import "./Login.scss";

  class Login extends Component {
  constructor(props) {
  super(props);
  }

  handleRoomChange = e => {
    this.setState({ room: e.target.value });
  };
  handleUsernameChange = e => {
  this.setState({ username: e.target.value });
  };
  handleJoin = e => {
    this.props.setRoom(this.state.room);
    this.props.setUsername(this.state.username);
  }

  render() {

    return (
    <>
        <div className="login-wrapper">
          <div className="chat-room-row">
            <TextField
                    id="standard-full-width"
                    placeholder="Room"
                    fullWidth
                    margin="normal"
                    onChange={this.handleRoomChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
            </div>
            <div className="username-row">
            <TextField
                    id="standard-full-width"
                    placeholder="Username"
                    fullWidth
                    margin="normal"
                    onChange={this.handleUsernameChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
            </div>
            <div className="join-btn-row">
              <Button variant="outlined" color="primary" onClick={e => this.handleJoin(e)}>
                Join
              </Button>
            </div>
        </div>
    </>
    );
  }
}

export default Login;

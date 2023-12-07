import React, { Component } from "react";
import Input from "../common/input";

class LoginFrom extends Component {
  username = React.createRef();
  state = {
    account: {
      username: "",
      password: "",
    },
    error: {
        
    }
  };

  //   componentDidMount(){
  //     this.username.current.focus()
  //   }
  handleChange = ({currentTarget: input}) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  validate = () => {
    return {username: "username is required"}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const error = this.validate()
    this.setState({error})
    if(error) return
  };

  render() {
    const {account} = this.state
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
            <Input 
            name = "username"
            label = "Username"
            value = {account.username}
            onChange = {this.handleChange}
            />
            <Input 
            name = "password"
            label = "Password"
            value = {account.password}
            onChange = {this.handleChange}
            />
            {/* <label htmlFor="username">UserName</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              name="username"
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={account.password}
              name="password"
              id="password"
              type="text"
              className="form-control"
            /> */}
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginFrom;

import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
        <div className="jumbotron">
            <form>
                  <div class="form-group">
                    <input type="text" class="form-control" id="nameSignup" placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="lastNameSignup" placeholder="Last Name" />
                  </div>
                  <div class="form-group">
                    <input type="text" class="form-control" id="usernameSignup" placeholder="username" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="userPasswordSignup" placeholder="password" />
                  </div>
                  <button type="submit" class="btn btn-primary" id="signup-submit">Sign up</button>
                </form>
                <br></br>
                <form>
                  <div class="form-group">
                    <input type="text" class="form-control" id="usernameLogin" placeholder="username" />
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" id="userPasswordLogin" placeholder="password" />
                  </div>
                  <button type="submit" class="btn btn-primary" id="login-submit">Login</button>
                </form>
        </div>
        ) 
      }
    }
   
    export default Main;

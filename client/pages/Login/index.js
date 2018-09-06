import React from 'react';

export default class Login extends React.PureComponent {
  render() {
    return (
      <div className="overlay bg-darkBlue d-flex">
        <form className="login-form bg-white p-6 mx-auto  w-25 border bd-default win-shadow flex-self-center">
          <span
            className="mif-vpn-lock mif-4x place-right"
            style={{ marginTop: '-10px' }}
          />
          <h2 className="text-light">登录</h2>
          <hr className="thin mt-4 mb-4 bg-white" />
          <div className="form-group">
            <input
              type="text"
              data-role="input"
              placeholder="Enter your email..."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              data-role="input"
              placeholder="Enter your password..."
            />
          </div>
          <div className="form-group mt-10">
            <input
              type="checkbox"
              data-role="checkbox"
              className="place-right"
            />
            <button className="button" type="button">
              Submit form
            </button>
          </div>
        </form>
      </div>
    );
  }
}

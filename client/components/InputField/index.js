import * as React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="input required">
        <input
          type="password"
          data-role="input"
          data-prepend="<span class='mif-key'>"
          placeholder="Enter your password..."
          data-validate="required minlength=6"
          className=""
          data-role-input="true"
        />
        <div className="button-group">
          <button
            className="button input-clear-button"
            tabIndex="-1"
            type="button"
          >
            <span className="default-icon-cross" />
          </button>
          <button
            className="button input-reveal-button"
            tabIndex="-1"
            type="button"
          >
            <span className="default-icon-eye" />
          </button>
        </div>
        <span className="mif-key prepend" />
      </div>
    );
  }
}

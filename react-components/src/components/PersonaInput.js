import React from 'react';
import PropTypes from 'prop-types';
import "./PersonaInput.css";
import { useState } from 'react';

function getInitials(x) {
  return !!x ? x.split(" ").map((n)=>n[0]).join("").toUpperCase() : "";
}

function PersonaInput({ primary, namePlaceholder, onChange }) {
  const [personName, setName] = useState();
  const initials = getInitials(personName);

  function onChangeName(event) {
    onChange(event)
    setName(event.target.value);
  }
  const avatarClassName = primary ? 'avatar primary' : 'avatar';
  return (
    <div className="persona-input">
      <div className={avatarClassName}>
        {initials}
      </div>
      <div className="input-container">
        <input type="text" className="primary" onChange={onChangeName} placeholder={namePlaceholder}></input>
      </div>
    </div>
  )
}


PersonaInput.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
};

PersonaInput.defaultProps = {
  primary: false,
  namePlaceholder: "Name",
  onChange: undefined,
};

export default PersonaInput;

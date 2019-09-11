import React, { useState } from 'react';
import {
  arrayOf,
  shape,
  string,
} from 'prop-types';

function Accordion({ items }) {
  const [active, setActive] = useState();

  function onToggle(id) {
    return function() {
      setActive(active === id ? undefined : id);
    };
  }

  const renderItem = ({ id, name, details }) => (
    <li key={id} onClick={onToggle(id)}>
      {name}
      {active === id && <div>{details}</div>}
    </li>
  );

  return (
    <ul>{items.map(renderItem)}</ul>
  );
}

Accordion.propTypes = {
  items: arrayOf(shape({
    id: string.isRequired,
    name: string.isRequired,
    details: string.isRequired,
  })).isRequired,
};

export default Accordion;

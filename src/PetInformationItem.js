import React from 'react';

const PetInformationItem = props =>
  <React.Fragment>
   <dt>{props.name}</dt>
   <dd>{props.value}</dd>
  </React.Fragment>
;

export default PetInformationItem;

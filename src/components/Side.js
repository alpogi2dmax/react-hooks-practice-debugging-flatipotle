import React from "react";

function Side(props) {

  console.log(props)


  return (<div>{props.sides.join(', ')}</div>)
}

export default Side;

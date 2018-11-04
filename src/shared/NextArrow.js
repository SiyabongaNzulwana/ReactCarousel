import React, { Component } from "react";

// export function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

class NextArrow extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const { className, style, onClick } = props;
    return(
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
    );
  }
}

import React from "react";

function Snake(props) {
  return (
    <div>
      {props.snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <div className="gameSnake" key={i} style={style}></div>;
      })}
      {/* <div className="gameSnake" style={{ top: 0, left: 0 }}></div>
      <div className="gameSnake" style={{ top: 0, left: "2%" }}></div>
      <div className="gameSnake" style={{ top: 0, left: "4%" }}></div> */}
    </div>
  );
}

export default Snake;

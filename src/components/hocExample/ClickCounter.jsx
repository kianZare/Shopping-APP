// import { useState } from "react";
import WithCounter from "../hoc/WithCount";

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onClick={incrementCount}>clicked {count} times</h2>
    </div>
  );
};

export default WithCounter(ClickCounter, 5);

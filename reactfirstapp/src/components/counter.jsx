import React from "react";

const Counter = (props) => {
  const { id, count, inc, dec } = props;

  return (
    <div className="mt-2">
      <button
        className="btn btn-primary"
        onClick={() => dec(id)}
      >
        -
      </button>

      <b className="bg-warning px-3 py-2 rounded mx-3">
        {count}
      </b>

      <button
        className="btn btn-primary"
        onClick={() => inc(id)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
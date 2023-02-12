import React from "react";

import useCounter from "../../hooks/useCounter";

export default function StateManagement() {

  const hookCustom = useCounter()
  return (
    <div className="container mt-5">
      <h2>Build Custom Hook in React</h2>
      <div className="mt-2 mb-3">
        Add counter: <strong>{hookCustom.addCount.counter}</strong>
      </div>
      <div className="d-grid">
        <button type="button" className="btn btn-dark" onClick={hookCustom.onCounterClick}>
          Add Counter
        </button>
      </div>
    </div>
  )
}


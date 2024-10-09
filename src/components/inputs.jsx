export default function Input({ input, handleChange }) {
  return (
    <>
      <div id="user-input" className="input-group">
        <div>
          <label> Initial Investment</label>
          <input
            type="number"
            value={input.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            required
          ></input>
          <label> Annual Investment</label>
          <input
            type="number"
            value={input.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            required
          ></input>
        </div>
        <div>
          <label> Expected Return</label>
          <input
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            type="number"
            value={input.expectedReturn}
            required
          ></input>
          <label>Duration</label>
          <input
            onChange={(event) => handleChange("duration", event.target.value)}
            type="number"
            min="1"
            max="12"
            value={input.duration}
            required
          ></input>
        </div>
      </div>
    </>
  );
}

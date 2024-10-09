import { Fragment, useState } from "react";
import image from "./assets/Investment-Calculator-logo.png";
import Header from "./components/header";
import Table from "./components/table";
import Input from "./components/inputs";
function App() {
  const [input, setInput] = useState({
    initialInvestment: 100,
    annualInvestment: 100,
    expectedReturn: 100,
    duration: 10,
  });
  function handleChange(obj, val) {
    setInput((prevObj) => {
      return {
        ...prevObj,
        [obj]: +val,
      };
    });
  }

  const inputIsValid = input.duration >= 1;
  return (
    <Fragment>
      <Header image={image}></Header>
      <Input input={input} handleChange={handleChange}></Input>
      {inputIsValid && <Table input={input}></Table>}
      {!inputIsValid && (
        <p className="center">Please enter duration greater than zero.</p>
      )}
    </Fragment>
  );
}

export default App;

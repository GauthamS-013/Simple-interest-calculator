import { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";
import "./App.css";

function App() {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [result, setResult] = useState(0);

  const [isPrincipleInValid, setIsPrincipleInValid] = useState(false);
  const [isRateInValid, setIsRateInValid] = useState(false);
  const [isYearInValid, setIsYearInValid] = useState(false);

  const handleValidation = (input) => {
    const { name, value } = input;
    console.log(name, value);
    if (name == "principle") {
      setPrinciple(value);
      !!value.match(/^\d*\.?\d+$/)
        ? setIsPrincipleInValid(false)
        : setIsPrincipleInValid(true);
    } else if (name == "rate") {
      setRate(value);
      !!value.match(/^\d*\.?\d+$/)
        ? setIsRateInValid(false)
        : setIsRateInValid(true);
    } else if (name == "years") {
      setYear(value);
      !!value.match(/^[1-9][0-9]*$/)
        ? setIsYearInValid(false)
        : setIsYearInValid(true);
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("inside handle calculate");
    if(principle&&rate&&year){
      setResult((principle*rate*year)/100)
    }else{
      alert("Enter Valid Input!!")
    }
  };

  const handleReset=()=>{
    setResult(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrincipleInValid(false)
    setIsRateInValid(false)
    setIsYearInValid(false) 
  }

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center bg-dark container-fluid"
        style={{ height: "100vh" }}
      >
        <div className="w-75 p-4 bg-light border shadow">
          <h1 className="text-center my-2">Simple Interest Calculator</h1>
          <div
            className="w-75 d-flex justify-content-center p-5 border rounded mx-auto"
            style={{ backgroundColor: "#48c270" }}
          >
            <h2>&#8377; {result}</h2>
          </div>
          <form
            action=""
            className="w-75 p-2 text-center mx-auto"
            onSubmit={(e) => {
              handleCalculate(e);
            }}
          >
            <div className="mt-2 mb-3 w-100">
              <TextField
                id="outlined-basic"
                label="Principle Amount ₹ (P)"
                variant="outlined"
                className="w-100"
                onChange={(e) => {
                  handleValidation(e.target);
                }}
                name="principle"
                value={principle}
              />
              {isPrincipleInValid && (
                <div className="text-danger fw-bold">
                  *Invalid Principle Amount
                </div>
              )}
            </div>
            <div className="mb-3 w-100">
              <TextField
                id="outlined-basic"
                label="Rate of Interest % (r.a)"
                variant="outlined"
                className="w-100"
                onChange={(e) => {
                  handleValidation(e.target);
                }}
                name="rate"
                value={rate}
              />
              {isRateInValid && (
                <div className="text-danger fw-bold">
                  *Invalid Rate of Interest
                </div>
              )}
            </div>
            <div className="mb-3 w-100">
              <TextField
                id="outlined-basic"
                label="Number of Years (Yr)"
                variant="outlined"
                className="w-100"
                onChange={(e) => {
                  handleValidation(e.target);
                }}
                name="years"
                value={year}
              />
              {isYearInValid && (
                <div className="text-danger fw-bold">
                  *Invalid Number of Years
                </div>
              )}
            </div>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                type="submit"
                disabled={isPrincipleInValid || isRateInValid || isYearInValid}
                className="bg-dark w-50"
                style={{ height: "60px" }}
              >
                CALCULATE
              </Button>
              <Button
                variant="outlined"
                className="w-50"
                style={{ height: "60px" }}
                onClick={handleReset}
              >
                RESET
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

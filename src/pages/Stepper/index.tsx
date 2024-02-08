import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { GeldIcons } from "@/icons/geld";
import Selectcurrency from "@/components/SelectCurrency";
import Router from "next/router";
import Email from "@/components/Email";
const steps = ["Currency", "Balance", "Finish"];
const currencyOptions = [
  "MNT - Mongolian Tugrik",
  "USD - United States Dollar",
  "EUR - Euro",
  "GBP - British Pound Sterling",
  "JPY - Japanese Yen",
  "CHF - Swiss Franc",
  "CAD - Canadian Dollar",
  "AUD - Australian Dollar",
  "CNY - Chinese Yuan",
  "INR - Indian Rupee",
  "BRL - Brazilian Real",
  "ZAR - South African Rand",
  "RUB - Russian Ruble ",
  "MXN - Mexican Peso",
  "SGD - Singapore Dollar",
  "NZD - New Zealand Dollar",
];
const HorizontalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    Router.push("/");
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          top: "5vh",
          position: "absolute",
        }}
      >
        <GeldIcons />
        <h1 style={{ fontFamily: "sans-serif", color: "black" }}>Geld</h1>
      </div>

      <Stepper
        activeStep={activeStep}
        style={{ top: "15vh", position: "absolute" }}
      >
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && (
        <div>
          <Selectcurrency
            currencyOptions={currencyOptions}
            handleNext={handleNext}
          />
        </div>
      )}
      {activeStep === 1 && (
        <div>
          <Email setActiveStep={setActiveStep} />
        </div>
      )}
      {activeStep === 2 && (
        <div>
          <Button onClick={handleReset}>Go to Dashboard</Button>
        </div>
      )}
    </div>
  );
};
export default HorizontalLinearStepper;

import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { GeldIcons } from "@/icons/geld";
import Selectcurrency from "@/components/SelectCurrency";
import Router from "next/router";
import Email from "@/components/BankBalance";
import { GoodJob } from "@/icons/GJ";
import styles from "@/styles/Stepper/LastStep.module.css";
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

  const handleReset = () => {
    setActiveStep(0);
    Router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.iconNameContainer}>
        <GeldIcons />
        <h1>Geld</h1>
      </div>

      <Stepper activeStep={activeStep} className={styles.checkList}>
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
            setActiveStep={setActiveStep}
          />
        </div>
      )}
      {activeStep === 1 && (
        <div>
          <Email setActiveStep={setActiveStep} />
        </div>
      )}
      {activeStep === 2 && (
        <div className={styles.lastStepContainer}>
          <GoodJob />
          <h1>Good Job</h1>
          <p className={styles.extraInfo}>
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
          <div>
            <Button onClick={handleReset} className={styles.goToButton}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default HorizontalLinearStepper;

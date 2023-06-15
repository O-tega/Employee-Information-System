// @ts-nocheck
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import MultistepForm from "./MultistepForm/MultistepForm";
import { ForwardButtonComponent, BackButtonComponent } from "./ButtonComponent";
import Step1 from "./MultistepForm/Step1";
import Step2 from "./MultistepForm/Step2";
import Step3 from "./MultistepForm/Step3";
import Step4 from "./MultistepForm/step4";

interface FormData {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  location: string;
  salary: string;
  bestQuotes: string;
}

const FORM_DATA = {
  firstName: "tega",
  lastName: "mattew",
  role: "front",
  email: "tega.gnail",
  location: "akure",
  salary: "10000000",
  bestQuotes: "food man",
};

function Card() {
  const navigate = useNavigate();
  const [data, setData] = useState(FORM_DATA);
  const [storedData, setStoredData] = useState<FormData[]>([]);

  useEffect(() => {
    // Load data from local storage on component mount
    const storedDataJson = localStorage.getItem("storedData");
    if (storedDataJson) {
      setStoredData(JSON.parse(storedDataJson));
    }
  }, []);

  useEffect(() => {
    // Save data to local storage whenever the storedData state changes
    localStorage.setItem("storedData", JSON.stringify(storedData));
  }, [storedData]);

  function updateFields(fields: Partial<FormData>) {
    setData((prevState) => ({
      ...prevState,
      ...fields,
    }));
  }
  const { step, next, isFirstStep, previous, isLastStep, isBeforeLast } =
    MultistepForm([
      <Step1 {...data} updateFields={updateFields} />,
      <Step2 {...data} updateFields={updateFields} />,
      <Step3 {...data} updateFields={updateFields} />,
      <Step4 data={data} />,
    ]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (!isLastStep) {
      next();
    } else {
      setStoredData((prevData) => [...prevData, data]);
      setData(FORM_DATA); // Reset form data after submitting
      setTimeout(() => {
        navigate("/");
      }, 2000); // Adjust the delay as needed
    }
  }

  return (
    <div className="background">
      <div className="flex justify-center items-center h-screen">
        <div className="flex-col justify-center">
          <div className="ct">
            <img src={logo} alt="" />
          </div>
          <p className="text-white ct text-big my-5">
            Kindly Complete your profile
          </p>
          <div className="border rounded-lg bg-white w-[712px] h-[494px] flex justify-center ">
            <form onSubmit={handleSubmit}>
              <p>{step}</p>
              {!isFirstStep && (
                <div className="flex justify-end relative">
                  <BackButtonComponent setClick={previous} />
                </div>
              )}
              {isBeforeLast ? (
                <div className="flex justify-end relative">
                  <ForwardButtonComponent label="Preview" />
                </div>
              ) : (
                <div className="flex justify-end relative">
                  <ForwardButtonComponent
                    label={isLastStep ? "Submit" : "Next"}
                  />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

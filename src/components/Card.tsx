import logo from "../assets/logo.svg";
import MultistepForm from "./MultistepForm/MultistepForm";
import { ForwardButtonComponent, BackButtonComponent } from "./ButtonComponent";
import Step1 from "./MultistepForm/Step1";
import Step2 from "./MultistepForm/Step2";
import Step3 from "./MultistepForm/step3";

function Card() {
  const { steps, currentStepIndex, step, next, isFirstStep, previous } =
    MultistepForm([<Step1 />, <Step2 />, <Step3 />]);

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
            <div>
              <p>
                {currentStepIndex + 1}/{steps.length}
              </p>
              <p>{step}</p>
              {!isFirstStep && (
                <div className="flex justify-end relative">
                  <BackButtonComponent label="Back" handleClick={previous} />
                </div>
              )}
              <div className="flex justify-end relative">
                <ForwardButtonComponent label="Next" handleClick={next} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

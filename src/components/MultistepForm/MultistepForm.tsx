import { ReactElement, useState } from "react";

function MultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(4);

  const next = () => {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  const previous = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  const handleClick = () => {
    setCurrentStepIndex(0);
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    isBeforeLast: currentStepIndex === steps.length - 2,
    isMiddle: currentStepIndex === steps.length - 3,
    steps,
    handleClick,
    goTo,
    next,
    previous,
  };
}

export default MultistepForm;

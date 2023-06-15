import { useState } from "react";
import { InputComponent, TextareaComponent } from "../InputComponent";

interface FormData {
  bestQuotes: string;
  salary: string;
}

function Step3() {
  const [formData, setFormData] = useState<FormData>({
    bestQuotes: "",
    salary: "",
  });

  const handleChange = (value: string, inputName: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  console.log(formData);

  return (
    <form>
      <div className="my-5">
        <TextareaComponent
          label="Best Quotes"
          inputName="bestQuotes"
          inputValue={formData.bestQuotes}
          className="border border-primary rounded px-5 focus:outline-primary w-[530px] h-[124px] "
          onInputChange={handleChange}
        />
      </div>
      <InputComponent
        label="Salary Range"
        inputName="salary"
        inputValue={formData.salary}
        onInputChange={handleChange}
      />
    </form>
  );
}

export default Step3;

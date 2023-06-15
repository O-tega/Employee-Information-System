import { useState } from "react";
import { InputComponent } from "../InputComponent";

interface FormData {
  firstName: string;
  lastName: string;
}

function Step1() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
  });

  const handleChange = (value: string, inputName: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-16">
        <InputComponent
          label="First Name"
          inputName="firstName"
          inputValue={formData.firstName}
          onInputChange={handleChange}
        />
        <InputComponent
          label="Last Name"
          inputName="lastName"
          inputValue={formData.lastName}
          onInputChange={handleChange}
        />
      </div>
    </form>
  );
}

export default Step1;

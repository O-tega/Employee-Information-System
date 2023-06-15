import { useState } from "react";
import SelectComponent from "../SelectComponent";
import { InputComponent } from "../InputComponent";

interface FormData {
  role: string;
  email: string;
  location: string;
}

interface Options {
  label: string;
  value: string;
}

function Step2() {
  const options: Options[] = [
    { label: "Front End Engineer", value: "frontEndEngineer" },
    { label: "Backend Engineer", value: "backEndEngineer" },
    { label: "Tester", value: "tester" },
    { label: "Product Designer", value: "productDesigner" },
  ];
  const [formData, setFormData] = useState<FormData>({
    role: "",
    email: "",
    location: "",
  });

  const handleChange = (value: string, inputName: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  console.log(formData);

  return (
    <div>
      <SelectComponent
        options={options}
        inputName="role"
        inputValue={formData.role}
        label="Role"
        onInputChange={handleChange}
      />
      <InputComponent
        label="Email Address"
        inputValue={formData.email}
        inputName="email"
        onInputChange={handleChange}
      />
      <InputComponent
        label="Location"
        inputValue={formData.location}
        inputName="location"
        onInputChange={handleChange}
      />
    </div>
  );
}

export default Step2;

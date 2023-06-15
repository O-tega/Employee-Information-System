import SelectComponent from "../SelectComponent";
import { InputComponent } from "../InputComponent";

type UserData = {
  role: string;
  email: string;
  location: string;
};
type Step2Props = UserData & {
  updateFields: (fields: Partial<FormData>) => void;
};

interface Options {
  label: string;
  value: string;
}

function Step2({ role, email, location, updateFields }: Step2Props) {
  const options: Options[] = [
    { label: "Front End Engineer", value: "frontEndEngineer" },
    { label: "Backend Engineer", value: "backEndEngineer" },
    { label: "Tester", value: "tester" },
    { label: "Product Designer", value: "productDesigner" },
  ];

  const handleChange = (value: string, inputName: string) => {
    updateFields({ [inputName]: value });
  };

  return (
    <div>
      <SelectComponent
        options={options}
        inputName="role"
        inputValue={role}
        label="Role"
        onInputChange={handleChange}
      />
      <InputComponent
        label="Email Address"
        inputValue={email}
        inputName="email"
        onInputChange={handleChange}
      />
      <InputComponent
        label="Location"
        inputValue={location}
        inputName="location"
        onInputChange={handleChange}
      />
    </div>
  );
}

export default Step2;

import { InputComponent } from "../components/InputComponent";

type UserData = {
  firstName: string;
  lastName: string;
};

type Step1Props = UserData & {
  updateFields: (fields: Partial<FormData>) => void;
};

function Step1({ firstName, lastName, updateFields }: Step1Props) {
  const handleChange = (value: string, inputName: string) => {
    updateFields({ [inputName]: value });
  };

  return (
    <div className="my-16">
      <InputComponent
        label="First Name"
        inputName="firstName"
        inputValue={firstName}
        onInputChange={handleChange}
      />
      <InputComponent
        label="Last Name"
        inputName="lastName"
        inputValue={lastName}
        onInputChange={handleChange}
      />
    </div>
  );
}

export default Step1;

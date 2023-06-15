import { InputComponent, TextareaComponent } from "../InputComponent";

type UserData = {
  bestQuotes: string;
  salary: string;
};
type Step3Props = UserData & {
  updateFields: (fields: Partial<FormData>) => void;
};

function Step3({ bestQuotes, salary, updateFields }: Step3Props) {
  const handleChange = (value: string, inputName: string) => {
    updateFields({ [inputName]: value });
  };

  return (
    <div>
      <TextareaComponent
        label="Best Quotes"
        inputName="bestQuotes"
        inputValue={bestQuotes}
        onInputChange={handleChange}
      />
      <InputComponent
        label="Salary Range"
        inputName="salary"
        inputValue={salary}
        onInputChange={handleChange}
      />
    </div>
  );
}

export default Step3;

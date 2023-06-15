interface Props {
  label: string;
  inputName: string;
  inputValue: string;
  onInputChange: (value: string, inputName: string) => void;
}

export function InputComponent({
  inputName,
  inputValue,
  onInputChange,
  label,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onInputChange(value, inputName);
  };
  return (
    <div className="my-5">
      <p className="text-primary font-semibold my-2">{label}</p>
      <input
        type="text"
        name={inputName}
        value={inputValue}
        className="border border-primary rounded px-5 focus:outline-primary w-[530px] h-[50px] "
        onChange={handleChange}
      />
    </div>
  );
}
export function TextareaComponent({
  inputName,
  inputValue,
  onInputChange,
  label,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onInputChange(value, inputName);
  };
  return (
    <div className="my-5">
      <p className="text-primary font-semibold my-2">{label}</p>
      <textarea
        type="text"
        name={inputName}
        value={inputValue}
        className="border border-primary rounded px-5 focus:outline-primary w-[530px] h-[124px] "
        onChange={handleChange}
      />
    </div>
  );
}

// @ts-nocheck
/* eslint-disable @typescript-eslint/no-shadow */
type UserData = {
  options: Options[];
};
type Props = UserData & {
  label: string;
  inputName: string;
  inputValue: string;
  onInputChange: (value: string, inputName: string) => void;
};

function SelectComponent({
  options,
  label,
  inputName,
  inputValue,
  onInputChange,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onInputChange(value, inputName);
  };

  return (
    <div className="my-5">
      <p className="text-primary font-semibold my-2">{label}</p>
      <select
        value={inputValue}
        name={inputName}
        onChange={handleChange}
        className="border border-primary rounded px-2 focus:outline-primary w-[530px] h-[50px] text-primary "
      >
        {/*  */}
        {options.map(({ value, label }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;

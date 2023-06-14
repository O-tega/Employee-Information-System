interface Props {
  label: string;
}

function InputText({ label }: Props) {
  // eslint-disable-next-line prettier/prettier
	return (
    <>
      <p>{label}</p>
      <input
        onChange={(e) => console.log(e.target.value)}
        className="border border-red-400 rounded"
      />
    </>
  );
}
export default InputText;

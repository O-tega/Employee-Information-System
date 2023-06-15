// @ts-nocheck
interface Step4Props {
  data: string[];
}

function Step4({ data }: Step4Props) {
  return (
    <div className="mt-5 w-[400px] justify-center">
      <p className="text-center mb-5 text-primary font-bold text-average">
        Summary
      </p>
      {Object.entries(data).map(([key]) => {
        return (
          <div key={key} className="flex justify-center">
            <div className="w-9/12">
              <div key={key} className="flex justify-between my-1">
                <h2 className="text-primary font-bold ">{key}</h2>
                <h2>{data[key]}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Step4;

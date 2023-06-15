import { useState, useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

interface FormData {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  location: string;
  salary: string;
  bestQuotes: string;
  checked: boolean;
}

const FORM_DATA: FormData[] = [
  {
    firstName: "John",
    lastName: "Doe",
    role: "Frontend Developer",
    email: "john.doe@example.com",
    location: "New York",
    salary: "$100,000",
    bestQuotes: "Stay hungry, stay foolish",
    checked: false,
  },
  // Add more objects as needed
];

function Table() {
  const navigate = useNavigate();
  const [records, setRecords] = useState<FormData[]>([]);

  console.log(records);

  useEffect(() => {
    const storedData = localStorage.getItem("storedData");
    if (storedData) {
      setRecords(JSON.parse(storedData));
    }
  }, []);

  function handleDeleteChecked() {
    const updatedRecords = records.filter((record) => !record.checked);
    setRecords(updatedRecords);
    localStorage.setItem("storedData", JSON.stringify(updatedRecords));
  }

  function handleCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    email: string
  ) {
    const { checked } = event.target;
    const updatedRecords = records.map((record) =>
      record.email === email ? { ...record, checked } : record
    );
    setRecords(updatedRecords);
  }

  if (records.length !== 0) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-5/6">
          <div className="my-14">
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-primary text-average font-bold">
              List of Employes in Enterscale
            </h2>
            <button
              type="submit"
              onClick={() => navigate("/form")}
              className="bg-primary w-[138px] cursor-pointer text-white font-bold items-center justify-center hover:bg-primaryDark  flex h-[48px] rounded-md  "
            >
              Create New <IonIcon icon={arrowForward} />
            </button>
          </div>
          <div className="flex justify-end mr-40 mb-10">
            <button
              type="submit"
              onClick={handleDeleteChecked}
              className="bg-[#000000] bg-opacity-20 w-[138px] cursor-pointer text-white font-bold items-center justify-center hover:bg-opacity-30  flex h-[48px] rounded-md"
            >
              Delete
            </button>
          </div>
          <div className="flex justify-center">
            <table className="w-5/6">
              <thead className="bg-[#DFE5EC] ">
                <tr>
                  <th className="head">Select</th>
                  <th className="head">Name</th>
                  <th className="head">Role</th>
                  <th className="head">Email</th>
                  <th className="head">Location</th>
                  <th className="head">Salary</th>
                  <th className="head">Best Quotes</th>
                </tr>
              </thead>
              <tbody className="">
                {records.map((record) => (
                  <tr key={record.email}>
                    <td className="tr">
                      <input
                        type="checkbox"
                        checked={record.checked}
                        onChange={(e) => handleCheckboxChange(e, record.email)}
                      />
                    </td>
                    <td className="tr Name">
                      {record.firstName} {record.lastName}
                    </td>
                    <td className="tr">{record.role}</td>
                    <td className="tr email">{record.email}</td>
                    <td className="tr">{record.location}</td>
                    <td className="tr salary">{record.salary}</td>
                    <td className="tr">{record.bestQuotes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-5/6">
        <div className="my-14">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-primary text-average font-bold">
            List of Employes in Enterscale
          </h2>
          <button
            type="submit"
            onClick={() => navigate("/form")}
            className="bg-primary w-[138px] cursor-pointer text-white font-bold items-center justify-center hover:bg-primaryDark  flex h-[48px] rounded-md  "
          >
            Create New <IonIcon icon={arrowForward} />
          </button>
        </div>
        <div className="w-[1031]px h-[517px] border rounded-lg border-primary flex justify-center items-center">
          <div>
            <p className="text-center text-primary font-bold text-average my-1 opacity-40">
              No Data yet
            </p>
            <button
              type="submit"
              onClick={() => navigate("/form")}
              className="bg-primary w-[160px] cursor-pointer text-white font-bold items-center justify-center hover:bg-primaryDark  flex h-[48px] rounded-md  "
            >
              Create Profile <IonIcon icon={arrowForward} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

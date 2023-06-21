import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useCallback,
} from "react";

interface Employee {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  location: string;
  salary: string;
  bestQuotes: string;
  checked: boolean;
}

interface EmployeeContextType {
  records: Employee[];
  handleCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    email: string
  ) => void;
}

interface Props {
  children: ReactNode;
}
interface InData {
  data: Employee[];
}

export const EmployeeContext = createContext<EmployeeContextType | null>(null);

function EmployeeRecordProvider({ children }: Props) {
  const [records, setRecords] = useState<Employee[]>([
    {
      firstName: "",
      lastName: "",
      role: "",
      email: "",
      location: "",
      salary: "",
      bestQuotes: "",
      checked: false,
    },
  ]);

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, email: string) => {
      const { checked } = event.target;
      const updatedRecords = records.map((record) =>
        record.email === email ? { ...record, checked } : record
      );
      setRecords(updatedRecords);
    },
    [records]
  );

  const handleDelete = useCallback(() => {
    const updatedRecords = records.filter((record) => !record.checked);
    setRecords(updatedRecords);
  }, [records]);

  const addData = useCallback(
    ({ data }: InData) => {
      setRecords(() => [...records, data]);
    },
    [records]
  );
  const employeeContextValue = useMemo(() => {
    return { records, handleCheckboxChange, handleDelete, addData };
  }, [records, handleCheckboxChange, handleDelete, addData]);

  return (
    <EmployeeContext.Provider value={employeeContextValue}>
      {children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeRecordProvider;

import { IonIcon } from "@ionic/react";
import { arrowForward, arrowBack } from "ionicons/icons";

interface Props {
  label: string;
  // handleClick(e: React.MouseEvent<HTMLButtonElement>): void;
}
interface BackProps {
  setClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

export function ForwardButtonComponent({ label }: Props) {
  return (
    <div>
      <button
        type="submit"
        className="bg-primary w-[138px] cursor-pointer text-white font-bold items-center justify-center hover:bg-primaryDark  flex h-[48px] rounded-md absolute top-16 right-0 "
      >
        {label} <IonIcon icon={arrowForward} />
      </button>
    </div>
  );
}
export function BackButtonComponent({ setClick }: BackProps) {
  return (
    <div>
      <button
        type="button"
        onClick={setClick}
        className="cursor-pointer text-white font-bold items-center justify-center   flex h-[48px]  absolute top-16 left-0 "
      >
        <IonIcon
          className="text-slate-200 hover:text-primary"
          icon={arrowBack}
          size="40"
        />
      </button>
    </div>
  );
}

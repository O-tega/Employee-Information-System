import { IonIcon } from "@ionic/react";
import { arrowForward, arrowBack } from "ionicons/icons";

interface Props {
  label: string;
  handleClick(e: React.MouseEvent<HTMLButtonElement>): void;
}

export function ForwardButtonComponent({ label, handleClick }: Props) {
  return (
    <div>
      <button
        type="submit"
        onClick={handleClick}
        className="bg-primary w-[138px] cursor-pointer text-white font-bold items-center justify-center hover:bg-primaryDark  flex h-[48px] rounded-md absolute top-16 right-0 "
      >
        {label} <IonIcon icon={arrowForward} />
      </button>
    </div>
  );
}
export function BackButtonComponent({ label, handleClick }: Props) {
  return (
    <div>
      <button
        type="submit"
        onClick={handleClick}
        className="bg-primary w-[138px] cursor-pointer text-white font-bold items-center justify-center hover:bg-primaryDark  flex h-[48px] rounded-md absolute top-16 left-0 "
      >
        <IonIcon icon={arrowBack} /> {label}
      </button>
    </div>
  );
}

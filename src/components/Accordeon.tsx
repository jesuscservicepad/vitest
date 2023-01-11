import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Accordeon = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header>
        <h3>{title} </h3>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close" : "Open"}
        </button>
      </header>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordeon;

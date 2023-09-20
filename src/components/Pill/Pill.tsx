import "./Pill.css";
import { Brand } from '../../brands/brands';

type PillProps = Brand & React.HTMLAttributes<HTMLButtonElement>;

export const Pill = ({ name, icon, ...rest }: PillProps) => {
  return (
    <button className="pill" {...rest}>
      <img src={icon} alt={name + " icon"} />
      <p className="pill_text">{name}</p>
    </button>
  );
};

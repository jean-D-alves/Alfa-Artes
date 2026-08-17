import { ReactNode } from "react";

type PropsCard = {
  icon: ReactNode;
  title: string;
  description: string;
  tag: string;
  color: string;
};

export default function CardServices({
  icon,
  title,
  description,
  tag,
  color,
}: PropsCard) {
  return (
    <div
      className="CardSection flex flex-col gap-5 p-5 justify-between w-2xs rounded-2xl border-2 hover:scale-105"
      style={{ borderColor: color }}
    >
      <div style={{ background: color,borderRadius:10, width: 40,height:40, justifyItems:"center", alignContent:"center" }}>{icon}</div>
      <h2 className="text-2xl" style={{ color }}>{title}</h2>
      <p>{description}</p>
      <p
        className="flex text-center justify-center rounded-2xl"
        style={{ backgroundColor: color }}
      >
        <small className="text-clear-text">{tag}</small>
      </p>
    </div>
  );
}
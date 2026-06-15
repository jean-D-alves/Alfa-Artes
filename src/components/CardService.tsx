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
      className="flex flex-col p-5 w-48 hover:border-t-4"
      style={{ borderColor: color }}
    >
      <div style={{ background: color,borderRadius:10, width: 40,height:40, justifyItems:"center", alignContent:"center" }}>{icon}</div>
      <h2 className="text-2xl" style={{ color }}>{title}</h2>
      <p>{description}</p>
      <p
        className="flex text-center justify-center rounded-2xl"
        style={{ backgroundColor: color }}
      >
        <small>{tag}</small>
      </p>
    </div>
  );
}
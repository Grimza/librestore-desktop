import "./Input.css";

type Position = "row" | "column";

type Props = {
  name: string;
  label?: string;
  position?: Position;
  maxLength?: number;
  type?: string;
  className?: string;
};

export function Input({
  className,
  name,
  label,
  position = "row",
  maxLength,
  type = "text",
}: Props) {
  return (
    <div
      style={{ display: "flex", flexDirection: position }}
      className={`${className}`}
    >
      <label className="" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input_base_style`}
        name={name}
        maxLength={maxLength}
        type={type}
      ></input>
    </div>
  );
}

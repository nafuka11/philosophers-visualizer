import "./ErrorMessages.css";

type Props = { errors: string[] };

export const ErrorMessages = ({ errors }: Props) => {
  return <div className="error">{errors.join("\r\n")}</div>;
};

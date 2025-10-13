import { ChangelogButton } from "./ChangelogButton";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="title"> Philosophers visualizer</h1>
      <ChangelogButton />
    </header>
  );
};

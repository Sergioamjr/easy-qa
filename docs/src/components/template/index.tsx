import { Github } from "../../icons";
import * as Style from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <>
      <Style.Header>
        <div className="container">
          <Style.A href="/">
            <Style.Logo>Easy QA</Style.Logo>
          </Style.A>
          <Style.A
            href="https://github.com/Sergioamjr/react-pixel-perfect"
            target="_blank"
            rel="noreferrer"
          >
            Github
            <Github />
          </Style.A>
        </div>
      </Style.Header>
      <Style.Content>{children}</Style.Content>
    </>
  );
}

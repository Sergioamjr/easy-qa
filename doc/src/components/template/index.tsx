import * as Style from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <>
      <Style.Header>
        <div className="container">
          <Style.Logo>PerfectUI</Style.Logo>
          <p>Github</p>
        </div>
      </Style.Header>
      <Style.Content>{children}</Style.Content>
    </>
  );
}

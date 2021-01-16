import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validateUrl from "valid-url";
import Template from "./../template";
import * as Style from "./styles";

const InputLink = () => {
  const history = useHistory();
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!validateUrl.isUri(url));
  }, [url]);

  const onChangeHandle = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setUrl(value);

  const redirectToCompare = () => {
    history.push(`/compare?s=${url}`);
  };

  return (
    <Template>
      <div className="container">
        <Style.Form>
          <Style.H2>Enter a valid URL to compare:</Style.H2>
          {/* <p>Input the url: {isValid ? "É valido!" : "Não é válido!"}</p> */}
          <Style.Input
            placeholder="https://www.website.com"
            value={url}
            type="text"
            onChange={onChangeHandle}
          />

          <div>
            <Style.Button onClick={redirectToCompare} disabled={!isValid}>
              Submit
            </Style.Button>
          </div>
        </Style.Form>
      </div>
    </Template>
  );
};

export default InputLink;

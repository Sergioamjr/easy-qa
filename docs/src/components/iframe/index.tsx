import { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import validateUrl from "valid-url";
import Iframe from "react-iframe";
import EasyQA from "easy-qa";
import Template from "./../template";

const InputLink = () => {
  const location = useLocation();
  const parsed = queryString.parse(location.search);
  const [url] = useState(parsed.s);
  const [isValid, setIsValid] = useState(validateUrl.isUri(url as string));

  useEffect(() => {
    if (url && typeof url === "string") {
      setIsValid(validateUrl.isUri(url));
    }
  }, [url]);

  return (
    <Template>
      {isValid && url && typeof url === "string" ? (
        <EasyQA saveOnLocalStorage={false}>
          <Iframe url={url} />
        </EasyQA>
      ) : (
        <p>URL não é valida!</p>
      )}
    </Template>
  );
};

export default InputLink;

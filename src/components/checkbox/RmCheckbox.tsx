import { useEffect, useState } from "react";
import "./rm-check.scss";
import { classNames } from "../../utils";
import type { IRmCheckboxProps } from "./rm-check";

const RmCheckbox = (props: IRmCheckboxProps) => {
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    if (props.value) setCheck(props.value);
  }, [props.value]);

  const handlerOnInput = (e: boolean) => {
    setCheck(e);
    if (props.changeValue) props.changeValue(e);
  };

  return (
    <div className={classNames("rm-check")}>
      {check ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handlerOnInput(false)}
          className="cp" 
        >
          <rect width="20" height="20" rx="4" fill="#0A051E" />
          <path
            d="M7.99992 14.4149L4.29492 10.7049L5.70493 9.29492L7.99992 11.5849L14.0449 5.54492L15.4549 6.95492L7.99992 14.4149Z"
            fill="white"
          />
        </svg>
      ) : (
        <div
          className={classNames(
            "rm-check__unchecked",
            props.isRequired && !check ? "rms-is-required" : "",
            "cp"
          )}
          onClick={() => handlerOnInput(true)}
        ></div>
      )}

      <label
        onClick={() => handlerOnInput(!check)}
        className={classNames(
          "rm-check__label",
          props.isRequired && !check ? "rms-is-required" : ""
        )}
      >
        {props?.label || ""}
      </label>
    </div>
  );
};

export default RmCheckbox;

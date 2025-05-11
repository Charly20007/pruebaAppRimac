import { useEffect, useState } from "react";
import "./rm-input.scss";
import type { IRmInputProps, TRmEventInput } from "./rm-input.interface";
import { classNames } from "../../utils";

const RmInput = ({ ...props }: IRmInputProps) => {
  const [value, setValue] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (props.value.length) {
      setValue(props.value);
    }
  }, [props.value]);

  const handlerOnInput = (e: TRmEventInput) => {
    const value = ((e?.target as any)?.value || "") as string;
    setValue(value);
    if (props.changeValue) props.changeValue(value);
  };

  return (
    <div
      className={classNames(
        "rm-input",
        props.error ? "rmi-error" : "",
        isActive ? "active" : "inactive"
      )}
    >
      <span className="rm-input__label">{props.label || "Label"}</span>
      <input
        className={classNames(
          `rm-input__input`,
          props.error ? "rmi-error" : ""
        )}
        type={props?.type ? props.type : "text"}
        placeholder={props.placeholder}
        value={value}
        onInput={(e) => handlerOnInput(e)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />
    </div>
  );
};

export default RmInput;

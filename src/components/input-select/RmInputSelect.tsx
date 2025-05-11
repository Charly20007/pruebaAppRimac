import { useEffect, useState } from "react";
import { classNames } from "../../utils";
import "./rm-input-select.scss";
import type { IRmInputSelectProps, TRmEventInput } from "./rm-input-select.interface";

const RmInputSelect = ({ ...props }: IRmInputSelectProps) => {
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
    <div className={classNames("rm-input-select")}>
      <div
        className={classNames("rm-input-select__sel", props.error ? "rmis-error" : "")}
      >
        <span>DNI</span>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
      <div
        className={classNames(
          "rm-input-select__inp",
          isActive && !props.error ? "active" : "",
          props.error ? "rmis-error" : ""
        )}
      >
        <span className={classNames("label")}>{props.label || "Label"}</span>
        <input
          className={classNames("rminput", props.error ? "rmis-error" : "")}
          type={props?.type ? props.type : "text"}
          placeholder={props.placeholder}
          value={value}
          onInput={(e) => handlerOnInput(e)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
      </div>
    </div> 
  );
};

export default RmInputSelect;

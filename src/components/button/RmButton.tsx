import { setNewClass } from "../../utils";
import type { IRmButtonProps, TRmEventButton } from "./rm-button.interface";
import "./rm-button.scss";

const RmButton = ({
  theme = "primary",
  size = "s",
  ...props
}: IRmButtonProps) => {
  
  const changeButton = (event: TRmEventButton) => {
    if (!props?.disabled && props?.changeButton) props.changeButton(event);
  };

  return (
    <button
      style={{ width: props.width ? props.width : "100%" }}
      onClick={(e) => changeButton(e)}
      className={new setNewClass()
        .setClass("rm-button")
        .setClassIsValid("rm-button__disabled", props?.disabled)
        .setClassIsValid("rm-button__enabled", !props?.disabled)
        .setClass(`rm-button__theme__${theme}`)
        .setClass(`rm-button__size__${size}`)
        .getClass()}
    >
      {props.label}
    </button>
  );
};

export default RmButton;

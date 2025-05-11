import { useEffect, useState } from "react";
import BackButtonMobile from "../../../assets/svgs/back-button-mobile.svg";
import BackButton from "../../../assets/svgs/back-button.svg";
import { useMobile } from "../../../core/hooks";
import "./step.scss";
import type { IItemStep, IStepContainerProps } from "../interfaces";
import { classNames } from "../../../utils";

const Step = (props: IItemStep) => {
  return (
    <div className="container-step" key={props.id + "step-fff"}>
      <div
        className={classNames(
          "container-step__id",
          props?.selected
            ? "container-step__id__active"
            : "container-step__id__inactive"
        )}
      >
        {props.id}
      </div>
      <div
        className={classNames(
          "container-step__label",
          props?.selected
            ? "container-step__label__active"
            : "container-step__label__inactive"
        )}
      >
        {props.label}
      </div>
    </div>
  );
};

export const StepContainer = (props: IStepContainerProps) => {
  const [idSelected, setIdSelected] = useState<number | string>(0);
  const { isMobile } = useMobile();
  const handlerBtnBack = () => {
    if (props.changeBack) props.changeBack(+idSelected);
  };
  useEffect(() => {
    if (props.idSelected) {
      setIdSelected(props.idSelected);
    }
  }, [props.idSelected]);

  if (isMobile) {
    return (
      <div className="container-step-c">
        <img
          src={BackButtonMobile}
          alt="back-button-mobile"
          onClick={() => handlerBtnBack()}
        />
        <label className="container-step-c__steps">
          PASO {props.idSelected} de {props.items.length}
        </label>
        <div className="container-step-c__progress">
          <div
            style={{
              width: props.idSelected?.toString() === "1" ? "10px" : "100%",
            }}
            className="container-step-c__progress__progress-bar"
          ></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container-step-c">
        {props.items.map((item, index) => {
          return (
            <div
              className="container-step-c__containt"
              key={"step-div-" + (index + 1)}
            >
              <Step
                id={parseInt(item.id + "")}
                label={"Planes y coberturas"}
                selected={idSelected.toString() === item.id.toString()}
              />
              {index + 1 < props.items.length && (
                <div
                  className={classNames(
                    "container-step-c__separator",
                    idSelected.toString() === item.id.toString()
                      ? "container-step-c__separator__active"
                      : "container-step-c__separator__inactive"
                  )}
                ></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="container-step-c__btn-back">
        <img
          src={BackButton}
          alt="back-button"
          className="cp"
          onClick={() => handlerBtnBack()}
        />
      </div>
    </>
  );
};

export default StepContainer;

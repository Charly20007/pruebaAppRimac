import { useEffect, useState } from "react";
import ProtectionForMe from "../../../assets/img/protection-for-me.png";
import ProtectionForSomeome from "../../../assets/img/protection-for-someome.png";
import RadioChecked from "../../../assets/svgs/radio-btn-checked.svg";
import RadioUnchecked from "../../../assets/svgs/radio-btn-uncheked.svg";
import "./card-select-for.scss";
import { classNames } from "../../../utils";
import type { TCardSelect } from "../types";

const Card = (props: {
  img: string;
  label: string;
  description: string;
  selected?: boolean;
  changeSelected: () => void;
}) => {
  return (
    <div
      className={classNames(
        "container-card",
        "cp",
        props.selected ? "container-card__active" : ""
      )}
      onClick={() => props.changeSelected()}
    >
      <img
        className="container-card__radio"
        src={props?.selected ? RadioChecked : RadioUnchecked}
        alt="cheked"
      />
      <div className="container-card__imglabel">
        <img src={props.img} alt="img" />
        <label>{props.label}</label>
      </div>
      <p className="container-card__parrafo">{props.description}</p>
    </div>
  );
};

const CardSelectFor = (props: {
  changeSelected: (val: TCardSelect) => void;
  value: TCardSelect;
}) => {
  const [selected, setSelected] = useState<TCardSelect>("");

  useEffect(() => {
    if (props.value !== "") {
      setSelected(props.value);
    }
  }, [props.value]);

  const changeCard = (val: TCardSelect) => {
    setSelected(val);
    props.changeSelected(val);
  };

  return (
    <div className="container-card-select">
      <Card
        img={ProtectionForMe}
        label="Para mí"
        description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
        selected={selected === "for-me"}
        changeSelected={() => changeCard("for-me")}
      />
      <Card
        img={ProtectionForSomeome}
        label="Para alguien más"
        description="Realiza una cotización para uno de tus familiares o cualquier persona."
        selected={selected === "for-other"}
        changeSelected={() => changeCard("for-other")}
      />
    </div>
  );
};

export default CardSelectFor;

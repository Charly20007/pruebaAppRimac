import ImgHome from "../../../assets/svgs/logo-card--home.svg";
import ImgClinica from "../../../assets/svgs/logo-card--clinica.svg";
import "./card-detail.scss";
import { useMobile } from "../../../core/hooks";
import { useState } from "react";
import NextBtn from "../../../assets/svgs/next-button-pag.svg";
import LastBtn from "../../../assets/svgs/last-button-pag.svg";
import type { IPlan } from "../../../core/interfaces";
import type { TCardSelect } from "../types";
import { classNames } from "../../../utils";
import RmSeparator from "../../../components/separator/RmSeparator";
import RmButton from "../../../components/button/RmButton";

const DetailSelect = ({
  value,
  ...props
}: {
  value: IPlan;
  typeCard: TCardSelect;
  changeCard: (i: IPlan) => void;
}) => {
  return (
    <div className="container-detail-select">
      <div
        className={classNames(
          "container-detail-select__recomendation",
          value?.recommendedPlan
            ? ""
            : "container-detail-select__recomendation__not"
        )}
      >
        {value?.recommendedPlan && "Plan recomendado."}
      </div>
      <div className={"container-detail-select__header-logo"}>
        <div>{value?.name}</div>
        <img src={value?.inHome ? ImgHome : ImgClinica} alt="home-or-clinica" />
      </div>
      <div className={"container-detail-select__price"}>
        <div className="price-01">Costo del plan</div>
        {props.typeCard === "for-me" && (
          <div className="price-02">${value?.price} al mes</div>
        )}
        {props.typeCard === "for-other" && (
          <div className="price-03">${value?.price} antes</div>
        )}
        {props.typeCard === "for-other" && (
          <div className="price-04">${value?.priceDiscount} al mes</div>
        )}
      </div>
      <RmSeparator height={25} />
      <RmSeparator height={2} bgColor="#D7DBF5" />
      <RmSeparator height={10} />
      <div className="container-detail-select__list">
        <ol>
          {(value?.description || []).map((res, index) => (
            <li key={"ol-li-" + (index + 1)}> {res}</li>
          ))}
        </ol>
      </div>
      <div className="container-detail-select__btn">
        <RmButton
          label="Seleccionar Plan"
          size="s"
          changeButton={() => props.changeCard(value)}
        />
      </div>
    </div>
  );
};

const CardDetailSelect = ({
  items,
  ...props
}: {
  items: IPlan[];
  typeCard: TCardSelect;
  changeCard: (i: IPlan) => void;
}) => {
  const [numPage, setNumPage] = useState<number>(1);
  const { isMobile } = useMobile(493);
  const isShowLastPage = () => numPage >= 2;
  const isShowNextPage = () => numPage < items.length;

  if (isMobile) {
    return (
      <>
        <div className={"container-card-detail-select"}>
          <DetailSelect
            key={numPage + "card-pag"}
            value={items[numPage - 1]}
            typeCard={props.typeCard}
            changeCard={(e) => props.changeCard(e)}
          />
        </div>
        <div className="container-card-detail-select__pagination">
          {isShowLastPage() ? (
            <img
              className="img-rotate-pag cp"
              src={NextBtn}
              alt="next-button-pag"
              onClick={() => setNumPage(numPage - 1)}
            />
          ) : (
            <img src={LastBtn} alt="last-button-pag" />
          )}
          <label>
            {numPage} / {items.length}
          </label>
          {isShowNextPage() ? (
            <img
              src={NextBtn}
              alt="next-button-pag"
              onClick={() => setNumPage(numPage + 1)}
            />
          ) : (
            <img
              className="img-rotate-pag"
              src={LastBtn}
              alt="last-button-pag"
            />
          )}
        </div>
      </>
    );
  }

  return (
    <div className={"container-card-detail-select"}>
      {items.map((res, index) => (
        <DetailSelect
          key={index + "card-pag"}
          value={res}
          typeCard={props.typeCard}
          changeCard={(e) => props.changeCard(e)}
        />
      ))}
    </div>
  );
};

export default CardDetailSelect;

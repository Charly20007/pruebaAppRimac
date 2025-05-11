import LogoFamilyBlack from "../../../../assets/svgs/logo-family-black.svg";
import "./step-summary.scss";
import { usePlanStore, useUserAuthStore } from "../../../../core/hooks";
import type { IViewSummaryProps } from "../../interfaces";
import RmSeparator from "../../../../components/separator/RmSeparator";

const StepSummaryView = (_props: IViewSummaryProps) => {
  const { plan } = usePlanStore();
  const { user } = useUserAuthStore();
  return (
    <div className="container-summary">
      <div className="container-summary__child">
        <label className="cp container-summary__child__title">
          Resumen del seguro
        </label>
        <div className="ctnrs-card">
          <span className="ctnrs-card__prices">Precios calculados para:</span>
          <RmSeparator height={10} />
          <div className="ctnrs-card__logo-name">
            <img src={LogoFamilyBlack} alt="logo-family-black" />
            <span>
              {user.name} {user.lastName}
            </span>
          </div>
          <RmSeparator height={15} />
          <RmSeparator bgColor="#D7DBF5" height={1} />
          <RmSeparator height={15} />
          <div className="ctnrs-card__detail-plan">
            <div>Responsable de pago</div>
            <div>DNI: {user.numberDocument}</div>
            <div>Celular: {user.numberCellPhone}</div>
          </div>
          <div className="ctnrs-card__detail-plan">
            <div>Plan elegido</div>
            <div>{plan.name}</div>
            <div>
              Costo del Plan: ${plan.priceDiscount ?? plan.price} al mes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSummaryView;

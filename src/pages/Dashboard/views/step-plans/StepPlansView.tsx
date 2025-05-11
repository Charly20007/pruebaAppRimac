import { useEffect, useState, useCallback } from "react"; // Import useCallback
import CardDetailSelect from "../../components/CardDetailSelect";

import CardSelectFor from "../../components/CardSelectFor";
import { getPlans } from "../../services";

import "./step-plans-view.scss";
import { usePlanStore, useUserAuthStore } from "../../../../core/hooks";
import type { IViewPlansProps } from "../../interfaces";
import type { IPlan } from "../../../../core/interfaces";
import type { TCardSelect } from "../../types";
import RmSeparator from "../../../../components/separator/RmSeparator";
import RmSpinner from "../../../../components/spinner/RmSpinner";

const StepPlansView = (props: IViewPlansProps) => {
  const [listPlans, setListPlans] = useState<IPlan[]>([]);
  const [typeCard, setTypeCard] = useState<TCardSelect>("");
  const [isLoadingPlan, setIsLoadingPlan] = useState<boolean>(true);

  const { user } = useUserAuthStore();
  const { plan, setNewPlan } = usePlanStore();

  const getDataPlans = useCallback(async (type: TCardSelect) => {
    setTypeCard(type);
    try {
      setIsLoadingPlan(true);
      const birthDay = user.birthDay.split("-");
      const yearsUser = new Date().getFullYear() - parseInt(birthDay[2]);
      const { list } = await getPlans(yearsUser, type);
      setListPlans(list);
    } catch (error) {
      alert("Ocurrio un error.");
    } finally {
      setIsLoadingPlan(false);
    }
  }, [user.birthDay]);

  useEffect(() => {
    if (plan.typeCard !== "") {
      getDataPlans(plan.typeCard);
    }
  }, [plan.typeCard, getDataPlans]); 

  const nextView = (val: IPlan) => {
    setNewPlan({ ...val, typeCard: typeCard });
    if (props.handlerNextStep) props.handlerNextStep();
  };

  return (
    <div className="container-step-plans">
      <div className="container-step-plans__description">
        <div className="generale-description summary">
          {user.name} ¿Para quién deseas cotizar?
        </div>
        <div className="generale-description description">
          Selecciona la opción que se ajuste más a tus necesidades.
        </div>
      </div>
      <div className="container-step-plans__card-select">
        <CardSelectFor
          value={typeCard}
          changeSelected={(type) => getDataPlans(type)}
        />
      </div>
      <RmSeparator height={15} />
      {isLoadingPlan && typeCard !== "" && (
        <div className="container-g-spinner-center">
          <RmSpinner />
          <RmSeparator height={15} />
        </div>
      )}
      {!isLoadingPlan && typeCard !== "" && (
        <CardDetailSelect
          items={listPlans}
          typeCard={typeCard}
          changeCard={(val) => nextView(val)}
        />
      )}
      <RmSeparator height={40} />
    </div>
  );
};

export default StepPlansView;

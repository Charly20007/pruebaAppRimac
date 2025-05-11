import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import StepContainer from "./components/StepContainer";
import StepPlansView from "./views/step-plans/StepPlansView";
import StepSummaryView from "./views/step-summary/StepSummaryView"; 
import { usePlanStore, useUserAuthStore } from "../../core/hooks";
import type { IItemStep } from "./interfaces";

const items: IItemStep[] = [
  { id: 1, label: "Planes y coberturas" },
  { id: 2, label: "Resumen" },
];

const DashBoard = () => {
  const [selected, setSelected] = useState<number>(1);

  const { setRemovUser } = useUserAuthStore();
  const { setDeletePlan } = usePlanStore();

  const navigate = useNavigate();
 
  const handleBackStep = (step: number) => {
    const newStep = step - 1;
    setSelected(newStep);
    if (newStep === 0) {
      sessionStorage.clear();
      setRemovUser();
      setDeletePlan();
      navigate("/");
    }
  };

  return (
    <div>
      <StepContainer
        items={items}
        idSelected={selected}
        changeBack={(step) => handleBackStep(step)}
      />
      {selected === 1 ? (
        <StepPlansView handlerNextStep={() => setSelected(2)} />
      ) : (
        <StepSummaryView handlerBackStep={() => setSelected(1)} />
      )}
    </div>
  );
};

export default DashBoard;

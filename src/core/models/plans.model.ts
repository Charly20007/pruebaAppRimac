import type { IPlan } from "../interfaces";

export class PlanOptionModel {

    public static build(plan: IPlan, isPriceDiscount: boolean = false): IPlan {
        const newPrice = plan.price - (plan.price * 0.05)
        return {
            name: plan.name,
            price: plan.price,
            description: plan.description,
            age: plan.age,
            priceDiscount: isPriceDiscount ? newPrice : undefined,
            inHome: !plan.name.includes("Clínica"),
            recommendedPlan: plan.price.toString() === "99"
        };
    }
}
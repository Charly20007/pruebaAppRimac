import { API_URL } from "../../../core/constants";
import type { IPlanContent } from "../../../core/interfaces";
import { PlanOptionModel } from "../../../core/models";
import type { TCardSelect } from "../types";


export const getPlans = async (ageUser: number = 34, type: TCardSelect): Promise<IPlanContent> => {
    try {
        const URL = `${API_URL}/api/plans.json`;
        const response = await fetch(URL);
        let data = await response.json() as IPlanContent;
        data.list = data.list.filter(res => res.age >= ageUser);
        data.list = data.list.map(res => PlanOptionModel.build(res, type === "for-other"))
        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }
}
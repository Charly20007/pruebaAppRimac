export interface IPlan {
    name: string;
    price: number;
    description: string[];
    age: number;
    recommendedPlan?: boolean;
    inHome?: boolean;
    priceDiscount?: number;
} 


export interface IPlanContent {
    list: IPlan[];
}
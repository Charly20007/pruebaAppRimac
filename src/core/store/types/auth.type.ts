import type { IQuote, IUserValues } from "../../interfaces/auth.interface";

export interface IUserAuth extends IUserValues, IQuote {
    loggued?: boolean; 
}
import type { IUserValues } from "../interfaces";

export class UserValuesModel implements IUserValues {
    name!: string;
    lastName!: string;
    birthDay!: string;
    birthDayDate: Date | undefined;

    constructor(val: IUserValues) {
        this.name = val.name;
        this.lastName = val.lastName;
        this.birthDay = val.birthDay;

        const dateBirt = this.birthDay.split('-')
        if (dateBirt.length === 3) {
            this.birthDayDate = new Date()
            this.birthDayDate?.setDate(parseInt(dateBirt[0]))
            this.birthDayDate?.setMonth(parseInt(dateBirt[1]))
            this.birthDayDate?.setFullYear(parseInt(dateBirt[2]))
        }
    }

}
export class setNewClass {

    private classes: string[] = [];

    public setClass(className: string): this {
        if (className.trim().length > 0) this.classes.push(className.trim())
        return this;
    }

    public setClassIsValid(className: string, is?: boolean): this {
        if (className.trim().length > 0 && is) this.classes.push(className.trim())
        return this;
    }

    getClass(): string {
        return this.classes.join(" ");
    }
}


export const classNames = (...classes: string[]) => {
    classes = classes.filter(res => res.trim().length > 0);
    return classes.join(" ");
}
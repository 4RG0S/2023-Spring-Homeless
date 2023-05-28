export default class DateBase {
    private _createdAt: Date;
    private _updatedAt?: Date;

    constructor(createdAt: Date, updatedAt?: Date) {
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    get updatedAt(): Date | undefined {
        return this._updatedAt;
    }

    set updatedAt(updatedDate: Date | undefined) {
        this._updatedAt = updatedDate;
    }

}

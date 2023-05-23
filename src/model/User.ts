import DateBase from "./base/DateBase";

export default class User extends DateBase {
    private _id: string;
    private _name: string;
    private _birth: Date;
    private _imageURL: string;
    private _lastLoginAt?: Date;

    constructor(
        id: string,
        name: string,
        birth: Date,
        imageURL: string,
        createdAt: Date,
        updatedAt?: Date,
        lastLoginAt?: Date,
    ) {
        super(createdAt, updatedAt);
        this._id = id;
        this._name = name;
        this._birth = birth;
        this._imageURL = imageURL;
        this._lastLoginAt = lastLoginAt;
    }

    // Getter
    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get birth(): Date {
        return this._birth;
    }

    get imageURL(): string {
        return this._imageURL;
    }

    get lastLoginAt(): Date | undefined {
        return this._lastLoginAt;
    }

    // Setter
    set id(value: string) {
        this._id = value;
    }

    set name(value: string) {
        this._name = value;
    }

    set birth(value: Date) {
        this._birth = value;
    }

    set imageURL(value: string) {
        this._imageURL = value;
    }

    set lastLoginAt(value: Date | undefined) {
        this._lastLoginAt = value;
    }
}

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
    set id(id: string) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set birth(birth: Date) {
        this._birth = birth;
    }

    set imageURL(imageURL: string) {
        this._imageURL = imageURL;
    }

    set lastLoginAt(lastLoginAt: Date | undefined) {
        this._lastLoginAt = lastLoginAt;
    }
}

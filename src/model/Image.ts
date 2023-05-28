export default class Image {
    private _image: File;
    private _name?: string;

    constructor(image: File, name?: string) {
        this._image = image;
        this._name = name;
    }

    makeFormData(): FormData {
        const formData = new FormData();
        if (this._name) formData.append('name', this._name);
        formData.append('file', this._image);
        return formData;
    }

    get formData() {
        return this.makeFormData();
    }

}

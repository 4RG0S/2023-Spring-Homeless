export class FileFrom {
    private _name?: string;
    private _id?: string;
    private _file?: File;

    constructor(
        name?: string,
        id?: string,
        file?: File
    ) {
        this._file = file;
        this._name = name;
        this._id = id;
    }

    // Getter
    get name(): string | undefined {
        return this._name;
    }

    get id(): string | undefined {
        return this._id;
    }
    
    get file(): File | undefined {
        return this._file;
    }

    // Setter
    set name(name: string | undefined) {
        this._name = name;
    }

    set id(id: string | undefined) {
        this._id = id;
    }

    set file(file: File | undefined) {
        this._file = file;
    }

}

export default class FileFormData {
    private _files: Array<FileFrom>;

    constructor(files: Array<FileFrom>) {
        this._files = files;
    }

    makeFormData(): FormData {
        const formData = new FormData();

        this._files.forEach((file, index) => {
            if (file) formData.append(`file${index}`, file.file as File, file.name);
        });

        return formData;
    }

    get requestFormData() {
        return this.makeFormData();
    }

}

export type FileObject = {
    name: string;
    file: File;
};

export default class FileForm {
    private _files: Array<FileObject>;

    constructor(files: Array<FileObject>) {
        this._files = files;
    }

    makeFormData(): FormData {
        const formData = new FormData();

        this._files.forEach((file, index) => {
            formData.append(`file${index}`, file.file, file.name);
        });

        return formData;
    }

    get formData() {
        return this.makeFormData();
    }

}

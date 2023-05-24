import { FileRequest } from "./request/Request";

export type FileResponse = {
    name: string;
    id: string;
    downloadURL: string;
}

export default class FileForm {
    private _files: Array<FileRequest>;

    constructor(files: Array<FileRequest>) {
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

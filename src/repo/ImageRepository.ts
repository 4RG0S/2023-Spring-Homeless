import { ImageRequest } from "../model/request/Request";

export default interface ImageRepository {
    uploadImage(image: ImageRequest): string;
}

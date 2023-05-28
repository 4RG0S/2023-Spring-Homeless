import Image from "../model/Image";

export default interface ImageRepository {
    uploadImage(image: Image): Promise<string>;
}

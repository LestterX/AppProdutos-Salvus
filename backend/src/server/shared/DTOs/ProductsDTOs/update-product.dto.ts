import { ProductCreateDTO } from "./create-product.dto";

export interface ProductUpdateDTO extends Partial<ProductCreateDTO> {}
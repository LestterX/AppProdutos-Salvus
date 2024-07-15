import { ProductCreate } from "./create-product";

export interface ProductUpdate extends Partial<ProductCreate> {}
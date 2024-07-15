import * as CreateProvider from './Create'
import * as UpdateByIdProvider from './UpdateById'
import * as DeleteProductById from './DeleteById'
import * as GetByIdProvider from './GetById'
import * as GetAllProvider from './GetAll'
import * as CountProvider from './Count'

export const ProductProviders = {
    ...CreateProvider,
    ...UpdateByIdProvider,
    ...DeleteProductById,
    ...GetByIdProvider,
    ...GetAllProvider,
    ...CountProvider,
}
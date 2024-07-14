import * as CreateController from './Create'
import * as GetAllController from './GetAll'
import * as GetByIdController from './GetById'
import * as DeleteByIdController from './DeleteById'
import * as UpdateByIdController from './UpdateById'

export const ProductControllers = {
    ...CreateController,
    ...DeleteByIdController,
    ...GetAllController,
    ...GetByIdController,
    ...UpdateByIdController,
}
import {StatusCodes} from 'http-status-codes'
import { Response } from 'express';

export class ServerResponses {  
    async ok(res: Response, data: object): Promise<Response> {
      console.log(data);
      return res.status(StatusCodes.OK).json({ ...data, statusCode: 200 });
    }
  
    async created(res: Response, data: object): Promise<Response> {
      console.log(data);
      return res.status(StatusCodes.CREATED).json({ ...data, statusCode: 201 });
    }
  
    async internalServerError(res: Response, data: object): Promise<Response> {
      console.log(data);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ ...data, statusCode: 500 });
    }
  
    async badRequest(res: Response, data: object): Promise<Response> {
      console.log(data);
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...data, statusCode: 400 });
    }
  }
  
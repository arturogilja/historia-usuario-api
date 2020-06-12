import { ErrorResponse } from '../errors/ErrorResponse'

export class ResourceNotFound extends ErrorResponse {
  constructor() {
    super(404, 1, 'Resource not found')
  }
}

/**
 * Class representing an API error.
 * @extends Error
 */
export class APIError<ResponseData = unknown> extends Error {
  readonly request?: Request;
  readonly response?: Response;
  readonly status?: number;
  readonly data?: ResponseData;

  constructor(request?: Request, response?: Response, data?: ResponseData) {
    super();
    this.name = this.constructor.name;
    if (request !== undefined) this.request = request;
    if (response !== undefined) {
      this.response = response;
      this.status = response.status;
    }
    if (data !== undefined) this.data = data;
  }
}

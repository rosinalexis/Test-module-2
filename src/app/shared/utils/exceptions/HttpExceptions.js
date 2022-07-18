import BaseExceptions from "./BaseExceptions";

export default class HttpException extends BaseExceptions {
  constructor(message) {
    super(message, "HttpException");
  }
}

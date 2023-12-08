class Responses {
  static create(success: boolean, message = "", payload = {}) {
    const response = {
      success,
      message,
      payload,
    };
    return response;
  }
}

export default Responses;

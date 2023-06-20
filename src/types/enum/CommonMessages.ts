const enum ErrorMessage {
    RESPONSE_EMPTY = `Sorry, something went wrong and the response is empty. Please try again!`,
    RESPONSE_ERROR = `Sorry, there was an error fetching the response.`,
    RESPONSE_GENERIC = `Sorry, something went wrong. Please try again later!`,
    RESPONSE_MAINTENANCE = `MAINTENANCE: ongoing updates. Please try again later.`,
    RESPONSE_FAILED_SUBMISSION = `Sorry, something went wrong in the submission process. Please try again later!`
}

const enum SuccessMessage {
    RESPONSE_SUBMISSION = `Your submission was received successfully!`
}
  
export {
  ErrorMessage,
  SuccessMessage,
}
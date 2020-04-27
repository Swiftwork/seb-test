export type SwishRequest = {
  /** Payment reference supplied by
    theMerchant. This is not used by Swish but
    is included in responses back to the client. This reference could for example be an
    order id or similar.
    If set the value must not exceed 35
    characters and only the following characters
    are allowed: [a-ö, A-Ö, 0-9, -] */
  payeePaymentReference?: string;

  /** URL that Swish will use to notify caller about the outcome of
    the Payment request. The URL has to use HTTPS. */
  callbackUrl: string;

  /** The registered Cell phone number of the
    person that makes the payment. It can only
    contain numbers and has to be at least 8
    and at most 15 digits. It also needs to match
    the following format in order to be found in
    Swish: country code + cell phone number
    (without leading zero). E.g.: 46712345678
    If set, request is handled as E-Commerce
    payment.
    If not set, request is handled as M- Commerce payment. */
  payerAlias?: string;

  /** The social security number of the individual
    making the payment, should match the
    registered value for payerAlias or the
    payment will not be accepted. The value should be a proper Swedish
    social security number (personnummer or
    sammordningsnummer). Note: Since MSS is a stand-alone test
    system it can not verify if payerSSN match
    registered value for payerAlias. It is possible
    to simulate an ‘ssn not matching’ error, see
    message property below. */
  payerSSN?: string;

  /** Minimum age (in years) that the individual
    connected to the payerAlias has to be in
    order for the payment to be accepted. Value has to be in the range of 1 to 99. Note: Since MSS is a stand-alone test
    system it can not verify the payerAlias age
    against the ageLimit value. It is possible to
    simulate an ‘age to low’ error, see message
    property below. */
  ageLimit?: string;

  /** The Swish number of the payee. It needs to
    match with Merchant Swish number. */
  payeeAlias: string;

  /** The amount of money to pay. The amount
    cannot be less than 0.01 SEK and not more
    than 999999999999.99 SEK. Valid value has to be all digits or with 2 digit
    decimal separated with a period. */
  amount: string;

  /** The currency to use. The only currently supported value is
    SEK. */
  currency: string;

  /** Merchant supplied message about the
    payment/order. Max 50 characters. Allowed characters are the letters a-ö, A-Ö,
    the numbers 0-9 and any of the special
    characters :;.,?!()-”. For MSS, an error code as defined in section
    4.4 can be set in this message property in
    order to simulate an error situation. */
  message?: string;
};

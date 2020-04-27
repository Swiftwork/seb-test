export type PaymentRequest = {
  amount: number;
  id: string;
};

export interface PaymentService {
  initPayment(request: PaymentRequest): void;
}

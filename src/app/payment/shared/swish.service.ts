import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentService, PaymentRequest } from './payment.interface';

@Injectable({
  providedIn: 'root',
})
export class SwishService implements PaymentService {
  constructor(private http: HttpClient) {}

  initPayment(request: PaymentRequest) {
    return this.http
      .post('/api/swish', {
        amount: request.amount,
        tel: request.id,
      })
      .toPromise();
  }
}

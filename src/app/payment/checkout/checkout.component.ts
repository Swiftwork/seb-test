import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwishService } from '../shared/swish.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  loading = false;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private swishService: SwishService
  ) {
    this.checkoutForm = this.formBuilder.group({
      amount: [null, Validators.required],
      tel: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  onReset() {
    this.checkoutForm.reset();
  }

  async onSubmit(form: FormGroup) {
    if (form.invalid) {
      this.error = true;
      return;
    }
    try {
      this.loading = true;
      await this.swishService.initPayment({
        amount: form.value.amount,
        id: form.value.tel,
      });
      this.router.navigate(['confirmation']);
      this.checkoutForm.reset();
    } catch (err) {}
    this.loading = false;
  }
}

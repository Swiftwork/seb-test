import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'payment',
    loadChildren: () =>
      import('./payment/payment.module').then((m) => m.PaymentModule),
  },
  {
    path: 'confirmation',
    loadChildren: () =>
      import('./receipt/receipt.module').then((m) => m.ReceiptModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'payment',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

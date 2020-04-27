import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceiptRoutingModule } from './receipt-routing.module';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [CommonModule, ReceiptRoutingModule],
})
export class ReceiptModule {}

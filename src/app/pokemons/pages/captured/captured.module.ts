import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapturedComponent } from './captured.component';
import { CapturedRoutingModule } from './captured-routing.module';
import { MaterialModule } from '../../../shared/modules/material/material.module';

@NgModule({
  declarations: [CapturedComponent],
  imports: [CommonModule, CapturedRoutingModule, MaterialModule],
})
export class CapturedModule {}

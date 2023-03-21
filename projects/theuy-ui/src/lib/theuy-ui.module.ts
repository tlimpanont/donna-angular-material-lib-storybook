import { NgModule } from '@angular/core';
import { TheuyUiComponent } from './theuy-ui.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TheuyUiComponent],
  imports: [MatButtonModule],
  exports: [TheuyUiComponent],
})
export class TheuyUiModule {}

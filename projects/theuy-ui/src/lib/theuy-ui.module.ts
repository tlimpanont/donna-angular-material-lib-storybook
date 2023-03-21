import { NgModule } from '@angular/core';
import { TheuyUiComponent } from './theuy-ui.component';
import { MatButtonModule } from '@angular/material/button';
import { TheuyUiService } from './theuy-ui.service';
import {MatIconModule} from "@angular/material/icon";
import {MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions} from "@angular/material/core";


const globalRippleConfig: RippleGlobalOptions = {
  // disabled: true,
};

@NgModule({
  declarations: [TheuyUiComponent],
  imports: [MatButtonModule, MatIconModule],
  exports: [TheuyUiComponent],
  providers: [TheuyUiService, {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: globalRippleConfig}],
})
export class TheuyUiModule {
  constructor(private service: TheuyUiService) {
    this.service.registerCustomIcons();
  }
}

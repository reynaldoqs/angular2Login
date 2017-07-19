import { NgModule } from '@angular/core';
import { MdInputModule,
        MdCheckboxModule,
        MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule
  ],
  exports: [
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule
  ]
})
export class AmModule { }

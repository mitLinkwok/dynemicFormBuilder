import { DatePickerComponent } from "./date-picker/date-picker.component";
import { SelectComponent } from "./select/select.component";
import { InputComponent } from "../components/input/input/input.component";
import { CommonModule } from "@angular/common";

import { IonicModule } from "@ionic/angular";
import { DynemicFormsComponent } from "../components/dynemic-forms/dynemic-forms.component";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFieldDirective } from "./dynamic-field/dynamic-field.directive";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule],
  declarations: [
    DynemicFormsComponent,
    DynamicFieldDirective,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
  ],

  exports: [
    DynemicFormsComponent,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
  ],
  entryComponents: [InputComponent, SelectComponent, DatePickerComponent],
})
export class ComponentsModule {}

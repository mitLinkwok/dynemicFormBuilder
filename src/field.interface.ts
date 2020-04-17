export interface Validator {
  name: string;
  validator: any;
  message: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: [];
  collections?: any;
  type: string;
  value?: any;
  dependId?: any;
  validations?: Validator[];
  id?: any;
}

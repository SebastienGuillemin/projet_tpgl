import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelFormInterface } from '../model/modelFormInterface';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private _profileForm: FormGroup;
  private _modelInstance: ModelFormInterface

  constructor() { }

  setModel(model: ModelFormInterface): void {
    this._modelInstance = model;
    this.generateForm();
  }

  private generateForm(): void {
    this._profileForm = new FormGroup({});
    this._modelInstance.getFormFields().forEach(
      (attribute) => {this._profileForm.addControl(attribute, new FormControl('', Validators.required));}
    );
  }

  getForm(): FormGroup {
    return this._profileForm;
  }

  getModel(): ModelFormInterface {
    return this._modelInstance;
  }

  hydrate(): void {
    Object.keys(this._profileForm.controls).forEach((formElementName) => {
      this._modelInstance[formElementName] = this._profileForm.controls[formElementName].value;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { TextfieldComponent, SearchfieldComponent, ButtonComponent } from 'my-ui-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TextfieldComponent, SearchfieldComponent, ButtonComponent],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit {

   onPrimaryClick() {
    console.log('Primary button clicked');
  }

  onOutlineClick() {
    console.log('Outline button clicked');
  }

  // ngModel example
  firstname: string = '';

  onFirstnameChange(value: string) {
    console.log('Firstname changed:', value);
  }

  // FormControl examples
  usernameControl = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  ageControl = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern(/^\d*$/)]);
  notRequiredControl = new FormControl({ value: '', disabled: true }, [Validators.maxLength(10)]);

  searchControl = new FormControl('', [Validators.maxLength(15)]);
  searchControl1 = new FormControl('', [Validators.maxLength(15)]);
  passwordControl = new FormControl('', [Validators.maxLength(15)]);

  ngOnInit() {
    // Subscribe to value changes and log
    this.usernameControl.valueChanges.subscribe(() => this.logField('Username', this.usernameControl));
    this.ageControl.valueChanges.subscribe(() => this.logField('Age', this.ageControl));
    this.notRequiredControl.valueChanges.subscribe(() => this.logField('Nickname', this.notRequiredControl));
    this.searchControl.valueChanges.subscribe(() => this.logField('Search 1', this.searchControl));
    this.searchControl1.valueChanges.subscribe(() => this.logField('Search 2', this.searchControl1));
    this.passwordControl.valueChanges.subscribe(() => this.logField('Password', this.passwordControl));
  }

  private logField(fieldName: string, control: FormControl) {
    console.groupCollapsed(`Field Update: ${fieldName}`);
    console.table({
      value: control.value,
      valid: control.valid,
      invalid: control.invalid,
      touched: control.touched,
      dirty: control.dirty,
      pristine: control.pristine,
      errors: control.errors,
    });
    console.groupEnd();
  }
}


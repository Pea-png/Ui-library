import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchfield',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' = 'primary';

  // Start / End icons
  @Input() iconStart?: string;
  @Input() iconEnd?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() iconClick = new EventEmitter<'start' | 'end'>();

 onInput() {
    console.log('User typed:', this.control.value);
    this.valueChange.emit(this.control.value);
  }
  clearInput() {
    this.control.setValue('');
    this.control.markAsUntouched();
    this.valueChange.emit('');
  }

  clickIcon(position: 'start' | 'end') { this.iconClick.emit(position); }

  hasText(): boolean { return !!this.control.value; }

  get inputClasses() {
    return {
      'has-icon-start': !!this.iconStart,
      'has-icon-end': !!this.iconEnd || this.hasText(),
    };
  }
  get clearButtonClasses() {
  return {
    'with-end-icon': !!this.iconEnd,
    'without-end-icon': !this.iconEnd
  };
}

}
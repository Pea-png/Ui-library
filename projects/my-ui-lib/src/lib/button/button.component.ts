import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'solid' | 'outline' | 'text' = 'solid';
  @Input() size: 'xs' | 'sm' | 'md' = 'md';
  @Input() color: 'primary' | 'secondary' | 'success' | 'error' | 'warning' = 'primary';

  @Input() iconStart?: string;
  @Input() iconEnd?: string;

  @Input() disabled = false;

  @Output() onClick = new EventEmitter<Event>();
}


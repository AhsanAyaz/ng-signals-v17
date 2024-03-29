import { Component, ElementRef, inject, input, output } from '@angular/core';
import { ChatMessage } from '../../message.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgClass],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  elRef = inject(ElementRef);
  get scrollContainer() {
    return this.elRef.nativeElement;
  }
}

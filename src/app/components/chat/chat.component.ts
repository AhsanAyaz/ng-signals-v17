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
  messages = input.required<ChatMessage[]>();
  myId = input.required<string>();
  messageDeleted = output<string>();
  elRef = inject(ElementRef);
  get scrollContainer() {
    return this.elRef.nativeElement;
  }

  deleteMessage(message: ChatMessage) {
    const conf = confirm('You sure you want to delete it?');
    if (!conf) {
      return;
    }
    this.messageDeleted.emit(message.id);
  }
}

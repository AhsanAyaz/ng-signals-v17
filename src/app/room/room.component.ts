import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  afterNextRender,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ChatComponent } from '../components/chat/chat.component';
import { ChatInputComponent } from '../components/chat-input/chat-input.component';
import { ChatMessage } from '../message.interface';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-room',
  standalone: true,
  imports: [ChatComponent, ChatInputComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomComponent {
  myId = uuidv4();
  contactId = uuidv4();
  chatBox = viewChild.required<ChatComponent>('chatBox');
  cdRef = inject(ChangeDetectorRef);
  newMessage = signal<ChatMessage | null>(null);
  messages = signal<ChatMessage[]>([
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
    {
      text: 'Hey',
      userId: this.myId,
      id: uuidv4(),
    },
    {
      text: 'How are you doing?',
      userId: this.contactId,
      id: uuidv4(),
    },
  ]);

  constructor() {
    afterNextRender(() => {
      this.scrollChatToBottom();
    });
  }

  newMessageEffect = effect(
    () => {
      if (!this.newMessage()) {
        return;
      }
      this.messages.update((messages) => [...messages, this.newMessage()!]);
      this.cdRef.detectChanges();
      this.scrollChatToBottom();
      this.newMessage.set(null);
    },
    {
      allowSignalWrites: true,
    }
  );

  deleteMessage(messageId: string) {
    this.messages.update((messages) =>
      messages.filter((msg) => msg.id !== messageId)
    );
  }

  scrollChatToBottom() {
    const el = this.chatBox().scrollContainer as HTMLElement;
    el.scrollTo({
      top: el.scrollHeight,
    });
  }
}

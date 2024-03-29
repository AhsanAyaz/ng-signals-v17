import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatComponent } from '../components/chat/chat.component';
import { ChatInputComponent } from '../components/chat-input/chat-input.component';
@Component({
  selector: 'app-room',
  standalone: true,
  imports: [ChatComponent, ChatInputComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomComponent {
  constructor() {}
}

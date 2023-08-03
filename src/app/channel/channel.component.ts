import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss'],
})
export class ChannelComponent implements OnInit {
  @Input('name') name = '';
  constructor() {}
  ngOnInit(): void {}
}

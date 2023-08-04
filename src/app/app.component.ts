import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Decoded Frontend';
  topicName = 'Change Detection in Angular';
  isVisible = true;
  creationDate = new Date();

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.topicName = 'Zone Js Angular';
      console.log(`Topic Name changed to ${this.topicName}`);
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    }, 3000);
  }

  getInfo() {
    return `1M Views | 10k Likes | 10 Favourites `;
  }

  ngOnInit(): void {}
}

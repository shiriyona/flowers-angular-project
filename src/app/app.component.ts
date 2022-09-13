import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'my-flowers-project';

  loadedFeature = 'flower';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

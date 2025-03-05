import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeaderSearchComponent } from './components/header-search/header-search.component';
import { HeaderFilterComponent } from './components/header-filter/header-filter.component';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, HeaderSearchComponent, HeaderFilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void { }

}

import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-header-search',
  imports: [MatInputModule, MatIconModule],
  templateUrl: './header-search.component.html',
  styleUrl: './header-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSearchComponent implements OnInit {

  ngOnInit(): void { }

}

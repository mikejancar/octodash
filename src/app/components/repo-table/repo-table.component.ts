import { Component, Input } from '@angular/core';

import { Repo } from '../../models/repo.interface';

@Component({
  selector: 'app-repo-table',
  templateUrl: './repo-table.component.html',
  styleUrls: ['./repo-table.component.css'],
})
export class RepoTableComponent {
  @Input() repos: Repo[] | null = [];
}

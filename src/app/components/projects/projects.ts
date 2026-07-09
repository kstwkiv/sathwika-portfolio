import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';
import { TiltDirective } from '../../directives/tilt.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective, TiltDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class ProjectsComponent {
  allProjects = portfolioData.projects;
  activeFilter = 'all';

  filters = [
    { label: 'All',        value: 'all' },
    { label: 'Backend',    value: 'backend' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Data & ML',  value: 'data' },
  ];

  get filteredProjects() {
    return this.activeFilter === 'all'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === this.activeFilter);
  }

  setFilter(value: string): void { this.activeFilter = value; }
}

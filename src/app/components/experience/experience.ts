import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  @ViewChild('timelineLine') lineRef!: ElementRef;
  experience = portfolioData.experience;
  private observer!: IntersectionObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.lineRef) return;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('drawn');
          this.observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    this.observer.observe(this.lineRef.nativeElement);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}

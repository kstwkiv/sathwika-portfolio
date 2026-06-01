import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  data = portfolioData;
  displayedTagline = '';
  currentTaglineIndex = 0;
  private typeInterval: ReturnType<typeof setInterval> | null = null;
  private pauseTimeout: ReturnType<typeof setTimeout> | null = null;
  isDeleting = false;
  charIndex = 0;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.typeInterval) clearInterval(this.typeInterval);
    if (this.pauseTimeout) clearTimeout(this.pauseTimeout);
  }

  startTypewriter(): void {
    const type = () => {
      const current = this.data.taglines[this.currentTaglineIndex];

      if (!this.isDeleting) {
        this.displayedTagline = current.substring(0, this.charIndex + 1);
        this.charIndex++;
        if (this.charIndex === current.length) {
          this.isDeleting = true;
          this.pauseTimeout = setTimeout(() => this.scheduleNext(), 1800);
          return;
        }
      } else {
        this.displayedTagline = current.substring(0, this.charIndex - 1);
        this.charIndex--;
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.data.taglines.length;
        }
      }

      this.typeInterval = setTimeout(type, this.isDeleting ? 60 : 100) as unknown as ReturnType<typeof setInterval>;
    };

    this.typeInterval = setTimeout(type, 400) as unknown as ReturnType<typeof setInterval>;
  }

  scheduleNext(): void {
    const type = () => {
      const current = this.data.taglines[this.currentTaglineIndex];
      this.displayedTagline = current.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.data.taglines.length;
      }
      this.typeInterval = setTimeout(type, 60) as unknown as ReturnType<typeof setInterval>;
    };
    this.typeInterval = setTimeout(type, 60) as unknown as ReturnType<typeof setInterval>;
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

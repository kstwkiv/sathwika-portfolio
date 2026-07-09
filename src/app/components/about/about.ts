import {
  Component, AfterViewInit, OnDestroy,
  ElementRef, ViewChildren, QueryList,
  Inject, PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio.data';
import { RevealDirective } from '../../directives/reveal.directive';

interface StatDisplay {
  label:   string;
  prefix:  string;   // e.g. "Top " in "Top 3%"
  display: string;   // animated portion
  suffix:  string;   // e.g. "+", "%"
  target:  number;   // numeric target
  isText:  boolean;  // true = just show raw, no counting
  raw:     string;   // original value string
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('statCard') statCards!: QueryList<ElementRef>;

  data   = portfolioData;
  stats: StatDisplay[] = [];

  private observer!: IntersectionObserver;
  private counted = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.stats = portfolioData.stats.map(s => this.parseStat(s));
  }

  private parseStat(s: { value: string; label: string }): StatDisplay {
    const raw = s.value;

    // "Top 3%" → prefix "Top ", numeric 3, suffix "%"
    const topMatch = raw.match(/^(Top\s+)([\d.]+)(%?)$/i);
    if (topMatch) {
      return {
        label: s.label, raw,
        prefix: topMatch[1],
        display: '0',
        suffix: topMatch[3] || '',
        target: parseFloat(topMatch[2]),
        isText: false,
      };
    }

    // "400+" → numeric 400, suffix "+"
    // "1643" → numeric 1643, suffix ""
    // "8.01" → numeric 8.01, suffix ""
    const numMatch = raw.match(/^([\d.]+)(\+?)$/);
    if (numMatch) {
      return {
        label: s.label, raw,
        prefix: '',
        display: '0',
        suffix: numMatch[2] || '',
        target: parseFloat(numMatch[1]),
        isText: false,
      };
    }

    // Fallback — just show text as-is
    return {
      label: s.label, raw,
      prefix: '', display: raw, suffix: '', target: 0, isText: true,
    };
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting) && !this.counted) {
        this.counted = true;
        this.animateCounters();
      }
    }, { threshold: 0.3 });

    this.statCards.forEach(c => this.observer.observe(c.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  animateCounters(): void {
    const duration = 2000;
    const startTime = performance.now();

    const isDecimal = (n: number) => !Number.isInteger(n);

    const easeOutExpo = (t: number) =>
      t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const tick = (now: number) => {
      const elapsed  = Math.min(now - startTime, duration);
      const progress = easeOutExpo(elapsed / duration);

      this.stats.forEach(s => {
        if (s.isText) return;
        const current = s.target * progress;
        s.display = isDecimal(s.target)
          ? current.toFixed(2)
          : Math.floor(current).toString();
      });

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        // Snap to final values
        this.stats.forEach(s => {
          if (s.isText) return;
          s.display = isDecimal(s.target)
            ? s.target.toFixed(2)
            : s.target.toString();
        });
      }
    };

    requestAnimationFrame(tick);
  }
}

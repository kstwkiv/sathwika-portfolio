import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  template: `
    <div class="cursor-dot"  [style.left.px]="dotX"  [style.top.px]="dotY"></div>
    <div class="cursor-ring" [style.left.px]="ringX" [style.top.px]="ringY"
         [class.hovering]="isHovering"></div>
  `,
})
export class CursorComponent implements OnInit, OnDestroy {
  dotX = -100; dotY = -100;
  ringX = -100; ringY = -100;
  isHovering = false;

  private targetX = -100; private targetY = -100;
  private frame: number | null = null;
  private mouseMoveHandler!: (e: MouseEvent) => void;
  private mouseOverHandler!: (e: MouseEvent) => void;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.mouseMoveHandler = (e: MouseEvent) => {
      this.dotX = e.clientX;
      this.dotY = e.clientY;
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    };

    this.mouseOverHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      this.isHovering = !!(
        target.closest('a, button, .project-card, .skill-tag, .filter-btn, .ach-card, .contact-card, .stat-card, .nav-logo')
      );
    };

    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseover', this.mouseOverHandler);
    this.animateRing();
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseover', this.mouseOverHandler);
    if (this.frame) cancelAnimationFrame(this.frame);
  }

  private animateRing(): void {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      this.ringX = lerp(this.ringX, this.targetX, 0.12);
      this.ringY = lerp(this.ringY, this.targetY, 0.12);
      this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }
}

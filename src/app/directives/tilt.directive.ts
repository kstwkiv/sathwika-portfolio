import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Subtle 3D tilt on mouse move.
 * Usage: <div appTilt>...</div>
 */
@Directive({
  selector: '[appTilt]',
  standalone: true,
})
export class TiltDirective implements OnDestroy {
  private animFrame: number | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.animFrame = requestAnimationFrame(() => {
      const rect = this.el.nativeElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotateX = ((y - cy) / cy) * -6;
      const rotateY = ((x - cx) / cx) * 6;
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`
      );
      this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.05s linear');
    });
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
    );
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s ease');
  }

  ngOnDestroy(): void {
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
  }
}

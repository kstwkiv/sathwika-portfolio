import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Scroll-reveal directive.
 * Usage: <div appReveal delay="200">...</div>
 * Adds .revealed class when element enters viewport.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() delay = 0;
  @Input() direction: 'up' | 'left' | 'right' | 'none' = 'up';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'reveal');
    this.renderer.addClass(this.el.nativeElement, `reveal-${this.direction}`);
    if (this.delay) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition-delay',
        `${this.delay}ms`
      );
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'revealed');
            this.observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}

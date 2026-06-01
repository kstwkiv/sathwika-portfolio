import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  data = portfolioData;

  contactLinks = [
    {
      label: 'Email',
      value: portfolioData.email,
      href: `mailto:${portfolioData.email}`,
      icon: '✉️',
    },
    {
      label: 'LinkedIn',
      value: 'sathwika-kurma',
      href: portfolioData.links.linkedin,
      icon: '💼',
    },
    {
      label: 'GitHub',
      value: 'kstwkiv',
      href: portfolioData.links.github,
      icon: '🐙',
    },
    {
      label: 'LeetCode',
      value: 'krystleks',
      href: portfolioData.links.leetcode,
      icon: '⚡',
    },
  ];
}

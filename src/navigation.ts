import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Dental Billing',
          href: getPermalink('/services/dental-billing'),
        },
        {
          text: 'Insurance Verification',
          href: getPermalink('/services/insurance-verification'),
        },
        {
          text: 'Claims Processing',
          href: getPermalink('/services/claims-processing'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Dental Billing', href: getPermalink('/services/dental-billing') },
        { text: 'Insurance Verification', href: getPermalink('/services/insurance-verification') },
        { text: 'Claims Processing', href: getPermalink('/services/claims-processing') },
        { text: 'Patient Billing', href: getPermalink('/services/patient-billing') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Case Studies', href: getPermalink('/case-studies') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="#"> Dental Billing Solutions</a> · All rights reserved.
  `,
};

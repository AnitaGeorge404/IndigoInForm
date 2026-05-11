import { NavigationItem } from '../types';

export const navLinks: NavigationItem[] = [
  { name: 'HOME', href: '/', hasDropdown: false },
  { name: 'THE PLATFORM', href: '#', hasDropdown: false },
  { name: 'SOLUTIONS', href: '#', hasDropdown: true },
  { name: 'SERVICES', href: '#', hasDropdown: false },
  { name: 'RESOURCES', href: '#', hasDropdown: false },
  { 
    name: 'ABOUT US', 
    href: '#', 
    hasDropdown: true,
    dropdownItems: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '/#careers' },
      { name: 'Who We Are', href: '#' },
      { name: 'Clients & Partners', href: '#' }
    ]
  },
  { name: 'CONTACT US', href: '/contact', hasDropdown: false },
];

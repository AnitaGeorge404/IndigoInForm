export interface NavigationDropdownItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: NavigationDropdownItem[];
}

export interface JobPosition {
  title: string;
  type: string;
  description: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OfficeLocation {
  id: string;
  title: string;
  address: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

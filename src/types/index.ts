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
  id?: string;
  title: string;
  type: string;
  department?: string;
  description: string;
  location: string;
  requirements?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  country: string;
  address: string;
  coordinates: [number, number];
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

export interface DashboardStat {
  title: string;
  value: string | number;
  change: string;
}

export interface Application {
  id: string;
  jobId: string;
  applicantName: string;
  email: string;
  status: 'Pending' | 'Reviewed' | 'Interviewing' | 'Rejected' | 'Hired';
  appliedAt: string;
}

export interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  createdAt: string;
  read: boolean;
}

export interface Activity {
  id: string;
  userId: string;
  action: string;
  timestamp: string;
}

export interface SidebarItem {
  title: string;
  path: string;
  icon: any; // using any temporarily to avoid explicit React component type import conflicts
}

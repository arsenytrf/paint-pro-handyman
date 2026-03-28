export interface Service {
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

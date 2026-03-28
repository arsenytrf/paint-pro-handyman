import Link from "next/link";
import { cn } from "@/lib/cn";

const variantStyles = {
  terra:
    "bg-terra-500 text-white hover:bg-terra-600 active:bg-terra-700",
  amber:
    "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700",
  outline:
    "border-2 border-terra-500 text-terra-500 hover:bg-terra-500 hover:text-white active:bg-terra-600",
  dark:
    "bg-stone-900 text-white hover:bg-stone-800 active:bg-stone-700",
  white:
    "bg-white text-stone-900 hover:bg-cream-100 active:bg-cream-200",
  ghost:
    "bg-transparent text-stone-900 hover:bg-cream-200 active:bg-cream-300",
} as const;

type Variant = keyof typeof variantStyles;

interface ButtonBaseProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
    external?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  variant = "terra",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center gap-2",
    "rounded-full px-8 py-3",
    "font-display uppercase tracking-wider font-semibold text-sm",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    className,
  );

  if ("href" in props && props.href && props.external) {
    const { href, external: _, ...rest } = props as ButtonAsLink;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if ("href" in props && props.href) {
    const { href, external: _, ...rest } = props as ButtonAsLink;
    const isTelOrMailto =
      href.startsWith("tel:") || href.startsWith("mailto:");

    if (isTelOrMailto) {
      return (
        <a href={href} className={baseStyles} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseStyles} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" className={baseStyles} {...buttonProps}>
      {children}
    </button>
  );
}

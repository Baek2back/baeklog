import type { LinkProps } from "next/link";
import Link from "next/link";
import { ComponentPropsWithoutRef, forwardRef } from "react";

export interface NextLinkProps
  extends Omit<LinkProps, "onMouseEnter" | "onClick">,
    Omit<ComponentPropsWithoutRef<"a">, "href" | "as"> {}

export const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
  (props, ref) => {
    const {
      href,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
      legacyBehavior,
      as,
      ...otherProps
    } = props;

    return (
      <Link
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref={passHref}
        prefetch={prefetch}
        locale={locale}
        legacyBehavior={legacyBehavior}
      >
        <a {...otherProps} ref={ref}>
          {props.children}
        </a>
      </Link>
    );
  }
);

NextLink.displayName = "NextLink";

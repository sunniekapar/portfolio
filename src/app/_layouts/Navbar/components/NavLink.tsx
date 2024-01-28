import Link from 'next/link';
import React from 'react';

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  name: string;
  href: string;
}

export default function NavLink({name, href, ...props} : NavLinkProps ) {
  return (
    <Link href={href} {...props} className="cursor-pointer group transition duration-300">
      {name}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 -mt-1 h-0.5 bg-accent"/>
    </Link>
  );
}

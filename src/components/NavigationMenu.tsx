import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

interface ButtonProps {
  Icon: React.ElementType; // Type for icon component
  label: string; // Label text
  href: string; // URL for the link
}

export interface NavigationMenuProps {
  buttons: ButtonProps[];
}

const IconButton: React.FC<ButtonProps> = ({ Icon, label, href }) => {
  return (
    <Button
      asChild
      variant="outline"
      className="shadow-none transition rounded-[13px] bg-transparent border-transparent duration-500 hover:bg-accent/15"
    >
      <Link href={href} className="flex items-center">
        <Icon className="mr-2" />
        {label}
      </Link>
    </Button>
  );
};

export default function NavigationMenu({ buttons }: NavigationMenuProps) {
  return (
    <div className="mb-4 border p-0 rounded-md w-fit bg-muted-foreground/5">
      {buttons.map((button, index) => (
        <IconButton key={index} {...button} />
      ))}
    </div>
  );
}

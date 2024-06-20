import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

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
      className="rounded-[12px] border-transparent bg-transparent shadow-none transition duration-500 hover:bg-accent/15"
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
    <div className="mb-4 w-fit rounded-[14px] border bg-muted-foreground/5 p-0">
      {buttons.map((button, index) => (
        <IconButton key={index} {...button} />
      ))}
    </div>
  );
}

'use client';

import * as React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
      <div className="group size-8 relative bg-primary rounded-full hover:shadow-md hover:shadow-muted-foreground transition duration-500">
        <div className="mix-blend-difference border border-primary relative transition translate-x-4 translate-y-0.5 duration-500 group-hover:translate-x-0.5  size-7 bg-white rounded-full translate-x" />
      </div>
    </button>
  );
}

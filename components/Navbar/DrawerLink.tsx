import { DrawerContext } from '@/providers/DrawerProvider';
import Link from 'next-intl/link';
import { useContext } from 'react';

export default function DrawerLink ({ href, children }: { href: string, children: React.ReactNode }) {

  const { closeMenu } = useContext(DrawerContext)!;

  return <Link href={href} onClick={closeMenu}>{ children }</Link>
}
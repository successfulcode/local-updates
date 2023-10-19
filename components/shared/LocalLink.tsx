import { NextIntlClientProvider } from 'next-intl';
import Link from 'next/link';
import { useContext } from 'react';

import { useLocale } from "next-intl";

export default function LocalLink({href, title}: {href: string, title: string}) {

  return <Link href={href}>{ title }</Link>
}
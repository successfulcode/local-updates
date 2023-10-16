'use client'

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('Main');
  return <>About ===== test { t('title') }</>
}

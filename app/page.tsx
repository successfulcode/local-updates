import ThemeButton from '@/components/shared/ThemeButton';
import Link from 'next/link';

export default function Main() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>Municpalities Updates Project</section>
      <section>
        <Link href="/about">About</Link>
      </section>
      <section>
        <ThemeButton />
      </section>
    </main>
  );
}

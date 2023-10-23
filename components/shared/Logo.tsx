import Link from 'next/link';

export default function logo() {
  return <>
    <Link href="/" className="normal-case text-xl">
      <span className="primary-background bg-clip-text text-transparent font-bold">
        Local Updates
      </span>
    </Link>
  </>
}

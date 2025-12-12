/**
 * Router utilities - Re-exports Next.js routing functionality
 * Provides centralized access to Next.js router features
 */

// Re-export Link component
export { default as Link } from 'next/link';
export type { LinkProps } from 'next/link';

// Re-export navigation hooks (App Router)
export {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
  redirect,
  permanentRedirect,
  notFound,
} from 'next/navigation';

export type { ReadonlyURLSearchParams } from 'next/navigation';

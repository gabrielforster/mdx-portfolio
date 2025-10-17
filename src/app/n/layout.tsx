import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ScrollTopButton } from '../../components/ScrollTopButton';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://next-mdx-blog.vercel.app'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: 'Gabriel Rocha',
    template: '%s | Gabriel Rocha'
  },
  description: 'My personal portfolio, blog, and personal website.'
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Link href="/" className="text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800">
          Go back
        </Link>
      </header>
      {children}
    </>
  );
}

function Footer() {
  const links = [
    { name: 'email', url: 'mailto:contatogabrielrochaf@gmail.com' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/gabrielforster' },
    { name: 'github', url: 'https://github.com/gabrielforster' }
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight text-gray-400 dark:text-gray-500">
        {links.map((link, index) => (
          <div key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              {link.name}
            </a>

            {(index < links.length - 1) && (
              <span className="ml-4">/</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <ScrollTopButton />
      </div>

      <div className="flex justify-center mt-4 border-t max-w-[60ch] pt-4 text-gray-500 dark:text-gray-400 mx-auto">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} | Gabriel Rocha
        </p>
      </div>
    </footer>
  );
}

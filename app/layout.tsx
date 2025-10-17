import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
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
    </footer>
  );
}

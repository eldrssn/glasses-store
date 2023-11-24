import { Html, Head, Main, NextScript } from 'next/document';
import { Header } from '@/components/header';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="ml-20 mr-20 relative">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

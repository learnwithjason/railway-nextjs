import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          async
          defer
          data-website-id="b62a00e0-3619-4995-94c2-6daa68948f8a"
          src="https://umami-production-b1b7.up.railway.app/umami.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

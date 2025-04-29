import '../../public/globals.css';
import Image from 'next/image';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { Oswald, Source_Sans_3 } from 'next/font/google';
import 'nextra-theme-docs/style.css';

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: 'SPECTRE Task Force',
  description: '...',
};

// If loading a variable font, you don't need to specify the font weight
const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
});
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
});

const banner = <Banner storageKey='some-key'>Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <>
        <Image src='/logo-sm.png' alt='logo-small' width={20} height={20} />
        <h1 style={{ marginLeft: '.4em', fontWeight: 800 }}>
          SPECTRE Task Force
        </h1>
      </>
    }
    chatLink='https://discord.gg/stf'
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>SPECTRE Task Force @ {new Date().getFullYear()}.</Footer>
);

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang='en'
      // Required to be set
      dir='ltr'
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
      className={`${oswald.variable} ${sourceSans.variable}}`}
    >
      <Head
        color={{
          hue: { dark: 48, light: 48 },
          saturation: { dark: 64, light: 80 },
        }}
        // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/layout/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/layout/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/layout/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/layout/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/layout/favicons/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#333333' />
        {/* Character, robots, and OG image */}
        <meta charSet='UTF-8' />
        <meta
          name='robots'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
        <meta property='og:locale' content='en_US' />
        <meta name='author' content='Fermin Solis' />
        <meta property='og:image:width' content='920' />
        <meta property='og:image:height' content='470' />
        <meta name='twitter:card' content='summary_large_image' />
        {/* Site name and keywords */}
        <meta
          property='og:site_name'
          content='The leading Ground Branch special operations unit.'
        />
        <meta name='keywords' content='Ground Branch, Spectre, Community' />
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap('/')}
          docsRepositoryBase='https://github.com/xvoodooxl/stf-website/tree/main'
          footer={footer}
          editLink='Edit this page on GitHub'
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

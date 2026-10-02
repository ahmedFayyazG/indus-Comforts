import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://induscomforts.co.uk';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Indus Comforts | Sofas & Furniture for Living Well',
    template: '%s | Indus Comforts',
  },
  description: 'Thoughtfully designed sofas, modular furniture and armchairs for comfortable, lived-in homes across the UK.',
  applicationName: 'Indus Comforts',
  keywords: ['sofas UK', 'modular sofas', 'comfortable furniture', 'armchairs UK', 'living room furniture', 'Indus Comforts'],
  authors: [{ name: 'Indus Comforts Limited' }],
  creator: 'Indus Comforts Limited',
  publisher: 'Indus Comforts Limited',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'Indus Comforts',
    title: 'Indus Comforts | Furniture for living well',
    description: 'Thoughtfully designed sofas and furniture for homes that are lived in.',
    images: [{ url: '/opengraph-image.svg', width: 1200, height: 630, alt: 'Indus Comforts furniture for living well' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indus Comforts | Furniture for living well',
    description: 'Thoughtfully designed sofas and furniture for homes that are lived in.',
    images: ['/opengraph-image.svg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'Indus Comforts Limited',
        url: siteUrl,
        description: 'Furniture retailer specialising in sofas, modular furniture and armchairs.',
        address: { '@type': 'PostalAddress', streetAddress: '5 Lord Street', addressLocality: 'Brierfield', addressRegion: 'Lancashire', postalCode: 'BB9 5JY', addressCountry: 'GB' },
        sameAs: ['https://find-and-update.company-information.service.gov.uk/company/17061353'],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Indus Comforts',
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-GB',
      },
    ],
  };

  return <html lang="en-GB"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}

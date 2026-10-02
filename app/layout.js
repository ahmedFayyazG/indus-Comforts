import './globals.css';

export const metadata = {
  title: 'Indus Comforts — Furniture for living well',
  description: 'Thoughtful sofas and furniture for homes that are lived in.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

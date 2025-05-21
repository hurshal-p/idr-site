export const metadata = {
  title: 'Home | My Site',
  description: 'Welcome to the homepage.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Sustainable Web Design',
  description: 'Web technology has the potential to bring huge benefits to society and the environment, but only if we use it wisely.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
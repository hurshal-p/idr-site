// app/layout.js

import './globals.css'
import Navbar from './Components/Navbar/Navbar'

export const metadata = {
  title: 'Indian Dental Retreat',
  description: 'Your Site Description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the Outfit font from Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Navbar />
      </body>
    </html>
  )
}

import "./globals.css";

export const metadata = {
  title: "Shrinivasan's Portfolio",
  description: "Resume of Shrinivasan Thevar",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Applies the saved light/dark choice before first paint.
// Also hides the intro for visitors who already saw it this session.
const themeScript = `try{var t=localStorage.getItem("shri-theme");if(t)document.documentElement.dataset.theme=t;if(sessionStorage.getItem("shri-intro"))document.documentElement.dataset.introSeen=""}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


import { ThemeProvider } from "../components/theme-provider"
import "./globals.css";


export const metadata = {
  title: "Portifólio - Maria Clara Reginato",
  description: "Trabalhos e habilidades",
};

export default function RootLayout({children }) {

  return (
    <html lang="pt">
      <body>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
};

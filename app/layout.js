
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css";


export const metadata = {
  title: "Portifólio - Maria Clara Reginato",
  description: "Trabalhos e habilidades",
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

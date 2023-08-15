import { StyleSheet } from "@/stitches/StyleSheet";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  title: "WidgetBot Event Demo",
  colorScheme: 'dark'
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" style={{ fontSize: "12px" }}>
      <head>
        <meta name="color-scheme" content="dark" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
        <StyleSheet />
      </head>
      <body
        className={inter.className}
        style={{
          backgroundImage: "url(/background.svg)"
        }}
      >
        {children}
      </body>
    </html>
  );
}

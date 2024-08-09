import "./globals.css";
import SmoothScrolling from "./utility/SmoothScrolling";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Topbar } from "./layouts/topbar/topbar";
import { Markazi_Text } from "next/font/google";
import localFont from "next/font/local";
import Menubar from "./layouts/navbar/menubar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const markaziText = Markazi_Text({
  subsets: ["latin"],
  variable: "--font-markaziText",
  weight: ["400", "500", "600"],
});

const markPro = localFont({
  src: [
    { path: "./fonts/MarkProRegular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/MarkProMedium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/MarkProBold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-markPro",
});

config.autoAddCss = false;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${markPro.className} ${markaziText.variable}`}>
        <Topbar />
        <Menubar />
        <SmoothScrolling>
          <div>{children}</div>
        </SmoothScrolling>
      </body>
    </html>
  );
}

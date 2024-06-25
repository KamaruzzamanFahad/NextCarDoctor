import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "@/Components/Global/Navber";
import AuthProvider from "@/Services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor Home",
  description: "Car Dontor is a car reaper shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="newtheme">
      <body className={inter.className}>
        <AuthProvider>
          <div className='px-[5%]'>
            <Navber></Navber>
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

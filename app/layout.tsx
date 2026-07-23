import "./globals.css";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Medsulov Pharmaceutical Pvt. Ltd.",
  description:
    "Trusted pharmaceutical wholesale and distribution partner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
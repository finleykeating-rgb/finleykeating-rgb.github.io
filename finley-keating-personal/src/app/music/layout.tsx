import { airportFonts } from "@fonts/fonts";

export default function MusicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={airportFonts.className}>
        {children}
    </div>
  );
}
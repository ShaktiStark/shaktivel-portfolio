import "./globals.css";
export const metadata = {
  title: "Shaktivel Thevar | Developer portfolio",
  description: "Full-stack developer in Mumbai. Explore my projects, experience, and resume."
};
export default function RootLayout({children}) {
  return <html lang="en"><body>{children}</body></html>;
}

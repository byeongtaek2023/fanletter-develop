import MainHedaer from  '@/components/main-header/main-header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainHedaer />
        {children}
      </body>
    </html>
  );
}

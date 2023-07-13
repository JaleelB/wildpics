export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="flex flex-grow flex-col items-center justify-center px-5 sm:px-10 mb-10">{children}</main>
  );
}
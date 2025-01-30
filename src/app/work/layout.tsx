export default function MyNewPageLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <h1>Custom Header for My New Page</h1>
        <main>{children}</main>
        <footer>Custom Footer</footer>
      </div>
    );
  }
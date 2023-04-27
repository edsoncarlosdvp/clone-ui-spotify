import './globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music.',
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}

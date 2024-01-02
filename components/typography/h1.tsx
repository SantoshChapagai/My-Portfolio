export default function TypographyH1({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className="text-3xl font-bold scroll-m-20 my-4">
      {children}
    </h1>

  )
}

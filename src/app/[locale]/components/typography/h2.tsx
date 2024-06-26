export default function TypographyH2({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className="text-2xl font-bold scroll-m-20 mx-4 mt-8 mb-2 lg:my-4">
      {children}
    </h2>

  )
}

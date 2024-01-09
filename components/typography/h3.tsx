export default function TypographyH3({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h3 className="text-xl font-bold scroll-m-20 my-4">
      {children}
    </h3>

  )
}
import {Outfit} from "next/font/google";
const outfit = Outfit({
  weight: "400",
  subsets: ['latin'],
});
export default function TypographyH1({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className={`${outfit.className} text-heading1 text-3xl scroll-m-20 mx-4 my-0 lg:my-4`}>
      {children}
    </h1>

  )
}

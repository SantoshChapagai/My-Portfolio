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
    <h1 className={`${outfit.className} text-3xl font-bold scroll-m-20 my-4`}>
      {children}
    </h1>

  )
}

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
    <h1 className={`${outfit.className} text-main scroll-m-20 my-4`}>
      {children}
    </h1>

  )
}

import Link from "next/link";
export const Lang = () => {
  
  return (
    <div className="space-x-2">
      <Link href="/en">EN</Link>
      <Link href="/fi">FI</Link>
    </div>
  );
};

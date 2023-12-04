import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPlus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Page() {
  return <h1>Main Page</h1>;
}

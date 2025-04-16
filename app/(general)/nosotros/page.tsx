import type {Metadata} from "next";

export const metadata: Metadata = { 
  description: "Contact Page",
  keywords: ["contact", "page", "nextjs"],
  authors: [{ name: "Geraldhine" }],
  }

export default function AboutPage() {
    return (
      <>
      <span className="text-2xl text-center">About PAGE</span>
      </>
    )
  }
  
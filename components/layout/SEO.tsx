import { NextSeo, NextSeoProps } from "next-seo"

import { fullURL } from "lib/url-fns"

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "StartKit",
  description:
    "StartKit is a sane starting place for building your Next.js apps",
  openGraph: {
    type: "website",
    url: fullURL(),
    site_name: "StartKit",
    images: [
      {
        url: `${fullURL()}/social.png`,
        width: 1200,
        height: 628,
        alt: "StartKit",
        type: "image/png"
      }
    ]
  },
  twitter: {
    handle: "@startkit_dev",
    site: `@startkit_dev`,
    cardType: "summary_large_image"
  }
}

export default function SEO(props: NextSeoProps = {}) {
  const seoProps = { ...NEXT_SEO_DEFAULT, ...props }

  return <NextSeo {...seoProps} useAppDir={true} />
}

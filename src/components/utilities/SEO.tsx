import React from "react";
import { Helmet } from "react-helmet-async";
type SEOProps = {
  title: string;
  url: string;
  description: string;
  img: string;
};

const SEO = ({ title, url, description, img }: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="similaroutskirts.vercel.app" />
      <meta property="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
};

export default SEO;

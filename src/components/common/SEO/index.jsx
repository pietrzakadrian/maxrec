import React from 'react';
import Helmet from 'react-helmet';
import { url, defaultDescription, defaultTitle, contact, legalName, foundingDate, logo } from 'data/config';
import maxrecfb from 'assets/logos/maxrecfb.jpg';

export const SEO = ({ title = defaultTitle, description = defaultDescription, location = '' }) => {
  const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"foundingDate": "${foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${contact.email}",
			"telephone": "${contact.phone}",
		}],
  	}`;

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={maxrecfb} />
      <meta property="og:url" content={`${url}${location}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={maxrecfb} />
      <script type="application/ld+json">{structuredDataOrganization}</script>
      <title>{title}</title>
      <html lang="pl" dir="ltr" />
    </Helmet>
  );
};

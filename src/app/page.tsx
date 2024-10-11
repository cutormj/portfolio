// pages/index.tsx

import React from 'react';
import { getWebsite } from '@/actions/website-action'; // Import your getWebsite function
import WebsiteDisplay from '@/components/WebsiteDisplay'; // Import your WebsiteDisplay component
import SampleTheme from '@/components/SampleTheme'; // Import your SampleTheme component


export default async function Home() {
  const websites = await getWebsite();

  return (
    <div className="flex flex-col justify-center items-center m-4">
      {/* <h1 className="text-3xl my-3">Start Here!</h1> */}
      {/* <span>Treasure Keepsakes</span> */}
      
      {/* Use the WebsiteDisplay component to render the website data */}
      <WebsiteDisplay websites={websites} />

      {/* Other components or UI elements */}
    </div>
  );
}

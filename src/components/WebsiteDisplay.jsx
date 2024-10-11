// components/WebsiteDisplay.tsx

import React from 'react';
import ProductHeros from "@/components/ProductHeros"

const WebsiteDisplay = ({ websites }) => {
  return (
    <div className="">
      {websites.length > 0 ? (
        websites.map((website) => (
          <div key={website._id} className="">
            <h2 className="">{website.businessName}</h2>
            <p className="">{website.vision}</p>
            
            <h3 className="">Target Markets:</h3>
            <ul className="">
              {website.targetMarkets.map((market, index) => (
                <li key={index}>{market}</li>
              ))}
            </ul>
            
            <h3 className="">Categories:</h3>
            <div>
              {Object.keys(website.categories).map((categoryKey) => {
                const category = website.categories[categoryKey];
                return (
                  <div key={categoryKey} className="">
                    <h4 className="">{categoryKey}</h4>
                    <p>{category.description}</p>
                    <ul className="">
                      {category.products.map((product, index) => (
                        <li key={index} className="">
                          <ProductHeros product={product} />
                          {/* <strong>{product.name}:</strong> {product.description} - ${product.price} */}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <h3 className="text-xl mt-4">Contact:</h3>
            <p>Email: {website.contact.email}</p>
            <p>Phone: {website.contact.phone}</p>
            <p>Address: {website.contact.address}</p>
            <p>Instagram: <a href={website.contact.socialMedia.instagram} target="_blank" rel="noopener noreferrer">{website.contact.socialMedia.instagram}</a></p>
            <p>Facebook: <a href={website.contact.socialMedia.facebook} target="_blank" rel="noopener noreferrer">{website.contact.socialMedia.facebook}</a></p>

            <h3 className="text-xl mt-4">Testimonials:</h3>
            <div>
              {website.testimonials.map((testimonial, index) => (
                <div key={index} className="mt-2">
                  <strong>{testimonial.name}:</strong> {testimonial.content}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No websites found.</p>
      )}
    </div>
  );
};

export default WebsiteDisplay;

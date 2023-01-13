import React from "react";
import ContentLoader from "react-content-loader";

export const ProductBlock = (props) => (
  <ContentLoader
    className="product"
    speed={2}
    width={280}
    height={400}
    viewBox="0 0 280 400"
    backgroundColor="#353339"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="280" height="280" />
    <rect x="0" y="290" rx="15" ry="15" width="280" height="50" />
    <rect x="130" y="350" rx="22" ry="22" width="150" height="40" />
    <rect x="0" y="350" rx="0" ry="0" width="120" height="40" />
  </ContentLoader>
);

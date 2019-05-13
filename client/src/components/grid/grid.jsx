import React from "react";

// Export Container, Row, Col components

export function Container({fluid, children}) {
  return <div className={`container${fluid ? -"fluid" : ""}`}>{children}</div>;
}

export function Row({fluid, children}) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({size, children}) {
  return <div className={size}>{children}</div>;
}


"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// This component is used to wrap the children in the root layout
// to provide page animations when the route changes. 
// (i.e. moving to the about page)
export default function AnimatePresenceWrapper({ children }) {
  const pathname = usePathname(); // Get the current route

  return (
    <AnimatePresence mode="wait">
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
}
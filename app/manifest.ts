import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Pinehollow",
    description: "An independent software studio in the United Kingdom.",
    start_url: "/",
    display: "browser",
    background_color: "#060A0F",
    theme_color: "#060A0F",
    icons: [
      { src: "/icon?v=3", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon?v=3", sizes: "180x180", type: "image/png" },
    ],
  };
}

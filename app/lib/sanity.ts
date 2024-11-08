import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId: "nhu8rg0k",
  dataset: "production",
  apiVersion: "2024-08-28",
  useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any){
  return builder.image(source);
}

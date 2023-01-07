import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { suspend } from "suspend-react";
import { _checkAuth } from "@sanity/preview-kit";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "rynz9udw",
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

//helper function to get image url
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//helper func for current logged in user
// export const useCurrentUser = createCurrentUserHook(config);

export const useCheckAuth = () =>
  suspend(
    () => _checkAuth(config.projectId, null),
    ["@sanity/preview-kit", "checkAuth", config.projectId]
  );

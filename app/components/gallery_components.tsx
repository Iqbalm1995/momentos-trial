import { Box, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";

export interface GalleryInterface {
  url: string;
  alt: string;
  width: string;
  height: string;
}

const Gallery = ({ images }: { images: GalleryInterface[] }) => {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={0}>
      {images.map((image, index) => (
        <Box key={index} overflow="hidden">
          <img
            src={image.url}
            alt={image.alt}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default Gallery;

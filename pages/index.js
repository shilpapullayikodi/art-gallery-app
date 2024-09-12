import styled from "styled-components";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  const spotlightImage = data[Math.floor(Math.random() * data.length)];

  return (
    <Spotlight
      image={spotlightImage.imageSource}
      title={spotlightImage.title}
      artist={spotlightImage.artist}
    />
  );
}

import styled from "styled-components";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({ data }) {
  const spotlightImg = data[Math.floor(Math.random() * data.length)];

  return (
    <Spotlight
      image={spotlightImg.imageSource}
      title={spotlightImg.title}
      artist={spotlightImg.artist}
    />
  );
}

import Lottie from "lottie-react";
import styled from "styled-components";
export function Lottieanimacion({ alto, ancho, animacion }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animacion,
  };
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={`${alto}px`}
        width={`${ancho}px`}
        isClickToPauseDisabled={false}
      />
    </Container>
  );
}
const Container = styled.div``;

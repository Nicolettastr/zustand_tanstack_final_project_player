import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { useNivelesStore } from "../../store/NivelesStore";
import { usePreguntasStore } from "../../store/PreguntasStore";
import { v } from "../../styles/variables";
import { Btn1 } from "../moleculas/Btn1";
import { Carousel } from "./Carousel";
export function PantallaPlayVerdadBebida({ setState }) {
  const [stateAnimacion, setStateAnimacion] = useState(true);

  const { nivelesItemSelect } = useNivelesStore();
  const { mostrarpreguntasxidnivel, preguntaItemSelect, chocolatear } =
    usePreguntasStore();
  const {
    data: preguntas,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["mostrar-preguntas-x-id-level", nivelesItemSelect?.id],
    queryFn: () => mostrarpreguntasxidnivel({ id_level: nivelesItemSelect.id }),
    enabled: !!nivelesItemSelect?.id,
  });

  console.log(nivelesItemSelect);

  if (error) {
    return <span>error...{error.message}</span>;
  }

  return (
    <Container>
      <section className="play">
        <Btn1
          color="rgba(0, 0, 0,0.5)"
          funcion={setState}
          icono={<v.iconoFlechabajo />}
          width="220px"
          color1={nivelesItemSelect.color_1}
          color2={nivelesItemSelect.color_2}
          texto={nivelesItemSelect.name}
        />

        <Carousel
          stateAnimacion={stateAnimacion}
          text={preguntaItemSelect?.question}
          bgcolor1={nivelesItemSelect.color_1}
          bgcolor2={nivelesItemSelect.color_2}
          icono={nivelesItemSelect.icon}
        />

        <Btn1
          color="#fff"
          funcion={() => {
            setStateAnimacion(true);
            chocolatear();
            setTimeout(function () {
              setStateAnimacion(false);
            }, 0.5 * 1000);
          }}
          width="320px"
          color1="#383838"
          color2="#111111"
          texto="Siguiente pregunta"
        />
      </section>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  flex-direction: column;
  overflow-y: auto;

  height: 100%;

  justify-content: center;
  text-align: center;
  grid-template:
    "play" 100vh
    "tutorial" auto;
  z-index: 1;
  span {
    font-weight: 700;
  }
  .play {
    grid-area: play;
    /* background-color: rgba(42, 227, 10, 0.5); */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  .tutorial {
    grid-area: tutorial;
    /* background-color: rgba(234, 17, 223, 0.5); */
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    padding: 25px;
    gap: 20px;
    .titulo {
      font-size: 24px;
    }
    p {
      font-size: 19px;
      color: hsl(247 10% 66%);
    }
    .subtitulo {
      font-size: 18.72px;
    }
    .textopintado {
      color: #fa891c;
    }
  }
`;

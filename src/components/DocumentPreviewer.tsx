import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled from "styled-components";
import { getColorForString } from "generate-colors";
import { ReviewScreenContext } from "../context/ReviewScreenContext";
import pagesData from "../data/pages.json";
import ImageSource from "../data/a2cbec1124234a6d846f908ba9531a2e-1.webp";
import ThemeToggle from "./ThemeToggle";
import { Blurhash } from "react-blurhash";

const PreviewerContainer = styled.div`
  flex-grow: 1;
  position: relative;
  overflow: auto;
  width: calc(100vw - 320px);
`;

const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  justify-center: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
`;

const ZoomControl = styled.select`
  z-index: 1;
`;

const HighlightBox = styled.div<{ color: string }>`
  position: absolute;
  background: ${(props) => props.color};
  box-sizing: border-box;
  padding: 8px;
`;

const zoomedUpto = 100;

const DocumentPreviewer: React.FC = () => {
  const [image, seImage] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  const { selectedFields, allFields, hoveredField } =
    useContext(ReviewScreenContext);

  useEffect(() => {
    // Can get image from API only!
    const imageData = pagesData.data.documents[0].pages[0].image;
    seImage(imageData.url);
    setImageWidth(imageData.width);
    setImageHeight(imageData.height);
  }, []);

  const handleZoomChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setZoomLevel(parseInt(e.target.value));
    },
    []
  );

  const highlightedBoxes = useMemo(() => {
    return allFields.filter((field) =>
      selectedFields.includes(field?.id.toString())
    );
  }, [allFields, selectedFields]);

  const hoveredOverField = useMemo(() => {
    return allFields.find((field) => field.id.toString() === hoveredField);
  }, [allFields, hoveredField]);

  const bgColorForHoveredField = useMemo(() => {
    const [r, g, b] = getColorForString(`${hoveredField}`);
    return `rgba(${r}, ${g}, ${b}, .5)`;
  }, [hoveredField]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = ImageSource;
  }, []);

  return (
    <PreviewerContainer>
      <ImageContainer>
        {isLoaded ? (
          <img
            src={ImageSource}
            alt={image}
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        ) : (
          <Blurhash
            hash="L5Ss50tl$*NGIAx]nOR*~Wo}RP%M"
            width="100%"
            height="100%"
            punch={1}
          />
        )}
        {hoveredOverField?.content ? (
          <HighlightBox
            color={bgColorForHoveredField}
            style={{
              left: `${
                (hoveredOverField.content.position[0] / imageWidth) * zoomedUpto
              }%`,
              top: `${
                (hoveredOverField.content.position[1] / imageHeight) *
                zoomedUpto
              }%`,
              width: `${
                ((hoveredOverField.content.position[2] -
                  hoveredOverField.content.position[0]) /
                  imageWidth) *
                zoomedUpto
              }%`,
              height: `${
                ((hoveredOverField.content.position[3] -
                  hoveredOverField.content.position[1]) /
                  imageHeight) *
                zoomedUpto
              }%`,
            }}
          />
        ) : null}
        {highlightedBoxes.map((box, index) => {
          const rectangle = box.content?.position || [];
          const [r, g, b] = getColorForString(`${box.id}`);
          return (
            <HighlightBox
              key={index}
              color={`rgba(${r}, ${g}, ${b}, .5)`}
              style={{
                left: `${(rectangle[0] / imageWidth) * zoomedUpto}%`,
                top: `${(rectangle[1] / imageHeight) * zoomedUpto}%`,
                width: `${
                  ((rectangle[2] - rectangle[0]) / imageWidth) * zoomedUpto
                }%`,
                height: `${
                  ((rectangle[3] - rectangle[1]) / imageHeight) * zoomedUpto
                }%`,
              }}
            />
          );
        })}
      </ImageContainer>

      <OptionsContainer>
        <ThemeToggle />
        <ZoomControl value={zoomLevel} onChange={handleZoomChange}>
          <option value="100">100%</option>
          <option value="75">75%</option>
          <option value="50">Fit</option>
        </ZoomControl>
      </OptionsContainer>
    </PreviewerContainer>
  );
};

export default DocumentPreviewer;

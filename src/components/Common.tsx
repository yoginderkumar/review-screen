import styled from "styled-components";

export const Stack = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => `${props?.gap}px`};
`;

export const Inline = styled.div<{
  gap?: number;
  alignitems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignitems || "stretch"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0")};
`;

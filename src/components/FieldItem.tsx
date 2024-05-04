import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { FaEllipsisV } from "react-icons/fa";
import { FieldData } from "./types";
import { Inline, Stack } from "./Common";

interface FieldItemProps {
  field: FieldData;
  isSelected: boolean;
  onSelect: (fieldId: number) => void;
  onRemove: (fieldId: number) => void;
  handleHoverOverField: (fieldId?: number) => void;
}

const FieldItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  position: relative;
`;

const Badge = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondBase};
  color: ${(props) => props.theme.colors.secondText};
  margin-right: 10px;
`;

const FieldLabel = styled.span`
  flex-grow: 1;
  font-weight: 600;
`;

const FieldValue = styled.span`
  flex-grow: 1;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondText};
`;

const MoreIcon = styled(FaEllipsisV)`
  cursor: pointer;
`;

const SelectBox = styled.div`
  position: absolute;
  top: 80%;
  right: 16px;
  background-color: ${(props) => props.theme.colors.secondBase};
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
`;

const FieldItem: React.FC<FieldItemProps> = ({
  field,
  isSelected,
  onSelect,
  onRemove,
  handleHoverOverField,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleSelect = useCallback(() => {
    onSelect(field?.id);
  }, [field?.id, onSelect]);

  return (
    <FieldItemContainer
      id={`${field.id}`}
      onMouseEnter={() => handleHoverOverField(field.id)}
      onMouseLeave={() => handleHoverOverField()}
    >
      <Inline alignitems="center">
        <Badge>{field.label.slice(0, 1).toUpperCase()}</Badge>
        <Stack gap={4}>
          <FieldLabel>{field.label}</FieldLabel>
          <FieldValue>{field.content?.value}</FieldValue>
        </Stack>
      </Inline>
      <Inline gap={4}>
        <input type="checkbox" checked={isSelected} onChange={handleSelect} />
        <MoreIcon onClick={() => setShowOptions((prev) => !prev)} />
      </Inline>
      {showOptions && (
        <SelectBox>
          <div
            onClick={() => {
              onRemove(field.id);
            }}
          >
            Remove
          </div>
        </SelectBox>
      )}
    </FieldItemContainer>
  );
};

export default FieldItem;

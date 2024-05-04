import React, { useCallback, useContext } from "react";
import { ReviewScreenContext } from "../context/ReviewScreenContext";
import FieldItem from "./FieldItem";
import { FieldData } from "./types";
import styled from "styled-components";

interface FieldListProps {
  fields: FieldData[];
}

const FieldListContainer = styled.div`
  height: 80%;
  overflow: auto;
`;

const FieldList: React.FC<FieldListProps> = ({ fields }) => {
  const { selectedFields, removeField, setHoveredField, setSelectedFields } =
    useContext(ReviewScreenContext);

  const handleFieldSelect = useCallback(
    (fieldId: number) => {
      const isSelected = selectedFields.includes(fieldId.toString());
      setSelectedFields((prevSelectedFields) =>
        isSelected
          ? prevSelectedFields.filter((id) => id !== fieldId.toString())
          : [...prevSelectedFields, fieldId.toString()]
      );
    },
    [selectedFields, setSelectedFields]
  );

  const handleHoverOverField = useCallback(
    (fieldId?: number) => {
      setHoveredField(fieldId?.toString() || "");
    },
    [setHoveredField]
  );

  const handleRemove = useCallback(
    (fieldId: number) => {
      return removeField(fieldId);
    },
    [removeField]
  );

  return (
    <FieldListContainer>
      {fields.map((field) => (
        <FieldItem
          key={field.id}
          field={field}
          isSelected={selectedFields.includes(field.id.toString())}
          onSelect={handleFieldSelect}
          onRemove={handleRemove}
          handleHoverOverField={handleHoverOverField}
        />
      ))}
    </FieldListContainer>
  );
};

export default FieldList;

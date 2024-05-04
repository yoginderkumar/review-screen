import React, { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import { ReviewScreenContext } from "../context/ReviewScreenContext";
import FieldList from "./FieldList";

const SidebarContainer = styled.div`
  width: 320px;
  position: relative;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 16px;
  background: ${(props) => props.theme.colors.secondBase};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Sidebar: React.FC = () => {
  const { allFields, selectedFields, setSelectedFields } =
    useContext(ReviewScreenContext);

  const handleSelectAll = useCallback(() => {
    const allFieldIds = allFields.map((field) => field.id.toString());
    setSelectedFields(allFieldIds);
  }, [allFields, setSelectedFields]);

  const handleDeselectAll = () => {
    setSelectedFields([]);
  };

  const isAllSelected = useMemo(() => {
    return selectedFields.length === allFields.length;
  }, [selectedFields.length, allFields]);

  return (
    <SidebarContainer>
      <h2 style={{ padding: "8px 16px" }}>Fields</h2>
      <FieldList fields={allFields} />
      <ButtonContainer>
        <Button
          onClick={() => {
            isAllSelected ? handleDeselectAll() : handleSelectAll();
          }}
        >
          {isAllSelected ? "Deselect All" : "Select All"}
        </Button>
      </ButtonContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

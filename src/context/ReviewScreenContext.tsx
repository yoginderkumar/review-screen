import React, { createContext, useCallback, useState } from "react";
import { FieldData } from "../components/types";
import sectionsData from "../data/sections.json";

interface ReviewScreenContextProps {
  hoveredField: string;
  selectedFields: string[];
  allFields: FieldData[];
  removeField: (fieldId: number) => void;
  setHoveredField: React.Dispatch<React.SetStateAction<string>>;
  setSelectedFields: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ReviewScreenContext = createContext<ReviewScreenContextProps>({
  hoveredField: "",
  selectedFields: [],
  allFields: [],
  removeField: () => {},
  setHoveredField: () => {},
  setSelectedFields: () => {},
});

export const ReviewScreenProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [allFields, setAllFields] = useState<FieldData[]>(
    sectionsData.data.sections[0].children
  );
  const [hoveredField, setHoveredField] = useState<string>("");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const removeFieldById = useCallback((fieldId: number) => {
    setAllFields((prev) => prev.filter((field) => field.id !== fieldId));
  }, []);

  const value: ReviewScreenContextProps = {
    allFields,
    hoveredField,
    selectedFields,
    setSelectedFields,
    setHoveredField,
    removeField: removeFieldById,
  };

  return (
    <ReviewScreenContext.Provider value={value}>
      {children}
    </ReviewScreenContext.Provider>
  );
};

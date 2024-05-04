export interface FieldData {
  id: number;
  label: string;
  acc: number;
  content?: {
    confidence: number;
    is_valid_format: boolean;
    orig_value: number | string;
    page: number;
    position: number[];
    position_label?: any[];
    review_required: boolean;
    validation_source: string;
    value: any;
  };
  doc_id: string;
  format: string;
  format_message: string;
  id_auto_extract?: number;
  id_auto_extract_label?: string;
  ignore?: boolean;
  low_confidence: boolean;
  no_items_row: number;
  order: number;
  org_id?: string;
  p_title: string;
  p_type: string;
  parent_id: number;
  time_spent?: number;
  type: string;
  user_id?: string;
}

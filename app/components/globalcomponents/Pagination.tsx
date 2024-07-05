import React from "react";
import { Pagination } from "antd";
import { PaginationProps } from "antd/es/pagination";

interface PaginationComponentProps extends PaginationProps {
  totalItems: number;
  onPageChange: (page: number, pageSize: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItems,
  onPageChange,
  ...props
}) => {
  return (
    <Pagination
      total={totalItems}
      onChange={onPageChange}
      showSizeChanger
      {...props}
    />
  );
};

export default PaginationComponent;

import React, { useState, useEffect, useCallback } from "react";

export const usePagination = (items, itemsPerPage) => {
  const [pagination, setPagination] = useState({ start: 0, end: itemsPerPage });
  const [paginatedItems, setPaginatedItems] = useState([]);

  useEffect(() => {
    const updatePaginatedItems = items.slice(pagination.start, pagination.end);
    setPaginatedItems(updatePaginatedItems);
  }, [items, pagination]);

  const onPaginationChange = useCallback((start, end) => {
    setPagination({ start, end });
  }, []);

  const start = pagination.start + 1;
  const end = Math.min(pagination.end, items.length);

  return { paginatedItems, start, end, onPaginationChange };
};

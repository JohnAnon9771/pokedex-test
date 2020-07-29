import React, { useState, useEffect } from 'react';

import { Container, List, Item } from './styles';

interface PaginationComponentProps {
  offset: number;
  setOffset: (value: number) => void;
  count: number;
}

const Pagination: React.FC<PaginationComponentProps> = ({
  count,
  setOffset,
  offset,
}: PaginationComponentProps) => {
  const [totalPages, setTotalPages] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  function paginate(totalPage: number, selectedPages: number) {
    const pages: string[] = [];
    let pageBefore = 0;

    for (let currPage = 0; currPage <= totalPage; currPage++) {
      const firstOrLastPage = currPage === 1 || currPage === totalPage;
      const pageAfterSelectedPage = selectedPages + 2 >= currPage;
      const pageBeforeSelectedPage = selectedPages - 2 <= currPage;

      if (
        firstOrLastPage ||
        (pageAfterSelectedPage && pageBeforeSelectedPage)
      ) {
        if (currPage - pageBefore > 1) {
          pages.push('...');
        }

        pages.push(currPage.toString());
        pageBefore = currPage;
      }
    }

    return pages;
  }

  const changePage = (page: string) => {
    setOffset(Number(page));
  };

  useEffect(() => {
    setTotalPages(count);
    setSelectedPage(offset);
  }, [offset, count]);

  return (
    <Container>
      <List>
        {paginate(totalPages, selectedPage).map((page, index) => (
          <Item
            key={index}
            onClick={() => !isNaN(Number(page)) && changePage(page)}
            className={selectedPage === Number(page) ? 'selected' : ''}
          >
            {String(page)}
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Pagination;

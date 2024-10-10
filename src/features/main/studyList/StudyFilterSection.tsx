import { Dispatch, SetStateAction, useCallback } from 'react';
import Container from '@components/container';
import Tag from '@components/tag';
import Input from '@components/input';
import { css } from '@emotion/react';

interface StudyFilterSectionProps {
  filters: string[];
  setFilters: Dispatch<SetStateAction<string[]>>;
}

function StudyFilterSection({ filters, setFilters }: StudyFilterSectionProps) {
  const handleTagClose = useCallback((filterName: string) => {
    const newFilter = [...filters];
    newFilter.splice(filters.indexOf(filterName), 1);
    setFilters(newFilter);
  }, [filters, setFilters]);

  return (
    <Container gap="40px">
      <Container gap="3px" justify="flex-end" cssOverride={css`flex-grow: 1`}>
        {
          filters.map((filterName) => (
            <Tag
              variant="primary"
              key={`study-filter-${filterName}`}
              onClose={() => {
                handleTagClose(filterName);
              }}
              enableClose
            >
              {filterName}
            </Tag>
          ))
        }
      </Container>
      <Input type="text" placeholder="원하는 스터디를 검색해보세요!" css={css`font-size: 12px; width: 200px`} />
    </Container>
  );
}

export default StudyFilterSection;

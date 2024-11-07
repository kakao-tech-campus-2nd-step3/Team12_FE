import { Dispatch, SetStateAction } from 'react';
import Container from '@components/container';
import Input from '@components/input';
import Select from '@components/select';
import type { StudyFilter } from '@/types/study';

interface StudyFilterSectionProps {
  studyFilter: StudyFilter;
  setStudyFilter: Dispatch<SetStateAction<StudyFilter>>;
  searchKeyword: string | undefined;
  setSearchKeyword: Dispatch<SetStateAction<string | undefined>>;
}

function StudyFilterSection({
  studyFilter, setStudyFilter, searchKeyword, setSearchKeyword,
}: StudyFilterSectionProps) {
  return (
    <Container gap="20px" justify="flex-end">
      <Select
        value={studyFilter}
        onChange={(e) => setStudyFilter(e.target.value as StudyFilter)}
        css={{ height: '35px', display: 'block' }}
      >
        <option value="all">전체</option>
        <option value="open">모집중</option>
        <option value="closed">모집마감</option>
      </Select>
      <Input
        type="text"
        placeholder="원하는 스터디를 검색해보세요!"
        css={{ fontSize: '12px', width: '200px' }}
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
      />
    </Container>
  );
}

export default StudyFilterSection;

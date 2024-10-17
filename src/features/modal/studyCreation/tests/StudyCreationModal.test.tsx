import { describe, expect, it } from 'vitest';
import {
  studyCreationButtonTestId,
} from '@features/modal/studyCreation/RightSection';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import StudyCreationModal
  from '@features/modal/studyCreation/StudyCreationModal';
import { renderWithProviders } from '@/utils/testUtils';

describe('스터디 모달 테스트', () => {
  it('스터디 생성 버튼은 모든 필수항목이 입력된 후 활성화되어야 합니다', async () => {
    renderWithProviders(<StudyCreationModal onClose={() => {}} open />);
    await userEvent.type(screen.getByLabelText('스터디 설명'), '스터디 설명');

    expect(
      screen.getByTestId(studyCreationButtonTestId),
    ).toBeDisabled();

    await userEvent.type(screen.getByLabelText('스터디명'), '스터디 이름');
    await userEvent.type(screen.getByLabelText('스터디 주제'), '주제');

    expect(
      screen.getByTestId(studyCreationButtonTestId),
    ).toBeEnabled();
  });
});

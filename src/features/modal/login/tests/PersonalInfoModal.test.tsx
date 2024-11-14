import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import PersonalInfoModal, { personalInfoModalTestId } from '@features/modal/login/PersonalInfoModal';
import { renderWithProviders } from '@/utils/testUtils';

describe('개인 정보 입력 모달 테스트', () => {
  it('가입하기 버튼은 모든 필수 항목이 입력된 후 활성화되어야 합니다', async () => {
    renderWithProviders(<PersonalInfoModal onClose={() => {}} open />);

    await userEvent.type(screen.getByLabelText('닉네임'), '닉네임');

    expect(screen.getByTestId(personalInfoModalTestId)).toBeDisabled();

    await userEvent.type(screen.getByLabelText('닉네임'), '럭키비키쿠키');
    await userEvent.type(screen.getByLabelText('연락처'), '010-1234-5678');
    await userEvent.type(screen.getByLabelText('자기소개'), '안녕하세요!');
    const agreeCheckbox = screen.getByTestId('agree-checkbox');
    await userEvent.click(agreeCheckbox);

    expect(screen.getByTestId(personalInfoModalTestId)).toBeEnabled();
  });

  it('올바르지 않은 형식으로 입력 할 경우 에러 메시지가 표시되어야 합니다', async () => {
    renderWithProviders(<PersonalInfoModal onClose={() => {}} open />);

    await userEvent.type(screen.getByLabelText('닉네임'), '닉네임');
    await userEvent.type(screen.getByLabelText('연락처'), '1234');
    await userEvent.type(screen.getByLabelText('자기소개'), '안녕하세요!');
    const agreeCheckbox = screen.getByTestId('agree-checkbox');
    await userEvent.click(agreeCheckbox);

    expect(screen.getByText('010-0000-0000 형식으로 작성해주세요.')).toBeInTheDocument();
  });
});

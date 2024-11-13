import { useStudyItemStyles } from '@features/main/studyList/StudyList.styles';
import { css, keyframes } from '@emotion/react';

function StudyItemSkeleton() {
  const { containerStyle } = useStudyItemStyles();
  const shimmer = keyframes`
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  `;

  const cssOverride = css`
    height: 193px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: ${shimmer} 1.5s infinite;
  `;
  return (
    <div css={[containerStyle, cssOverride]} />
  );
}

export default StudyItemSkeleton;

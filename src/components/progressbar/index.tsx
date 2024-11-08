import progressBarStyle from '@/components/progressbar/progressBarStyle';

interface ProgressProps {
  progress: number;
  description?: string;
  width?: string;
}

function ProgressBar({ progress, description = '', width = '100%' }: ProgressProps) {
  const {
    progressBarContainerStyle, progressWrapperStyle, progressStyle, textWrapperStyle,
  } = progressBarStyle();
  return (
    <div css={progressBarContainerStyle}>
      <div css={progressWrapperStyle(width)}>
        <div css={progressStyle(progress)} />
      </div>
      <div css={textWrapperStyle(width)}>
        <span>
          {progress}
          %
        </span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default ProgressBar;

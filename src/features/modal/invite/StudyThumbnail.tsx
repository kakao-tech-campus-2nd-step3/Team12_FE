import corners from '@/styles/corners';
import colorTheme from '@/styles/colors';

interface StudyThumbnailProps {
  src: string;
}

function StudyThumbnail({ src }: StudyThumbnailProps) {
  return (
    <img
      src={src}
      alt="study thumbnail"
      width={196}
      height={193}
      style={{ borderRadius: corners.medium, border: `2px solid ${colorTheme.absolute.black}` }}
    />
  );
}

export default StudyThumbnail;

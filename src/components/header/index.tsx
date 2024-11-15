import Container from '@components/container';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { css, useTheme } from '@emotion/react';
import logo from '@assets/logo.svg';
import alarm from '@assets/icons/alarm.svg';
import dropDown from '@assets/icons/dropdown.svg';
import {
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { rootWidth } from '@styles/length';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import LoginModal from '@features/modal/login/LoginModal';
import { Link } from 'react-router-dom';
import routePaths from '@constants/routePaths';
import toast from 'react-hot-toast';
import StudyCreationModal from '@/features/modal/studyCreation/StudyCreationModal';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { memberInfo, isLoggedIn } = useContext(MemberInfoContext);
  const toggleContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const [isStudyCreationModalOpen, setIsStudyCreationModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <Container cssOverride={css`background-color: ${theme.colors.background.main}; box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); position: relative;`}>
        {isStudyCreationModalOpen && (
        <StudyCreationModal
          open={isStudyCreationModalOpen}
          onClose={() => setIsStudyCreationModalOpen(false)}
        />
        )}
        <Container
          justify="space-between"
          padding="20px"
          height="60px"
          width={rootWidth}
        >
          <Link to={routePaths.MAIN}>
            <img
              src={logo}
              alt="logo"
              css={{ width: '75px' }}
            />
          </Link>
          <Container
            width="auto"
            gap="20px"
          >
            <Button
              variant="default"
              onClick={() => {
                if (isLoggedIn) {
                  setIsStudyCreationModalOpen(true);
                  return;
                }

                toast.error('로그인이 필요한 작업입니다. 먼저 로그인해주세요.');
              }}
            >
              스터디 생성하기
            </Button>
            <img src={alarm} alt="alarm" css={{ width: '25px' }} />
            <Container
              width="auto"
              padding="0"
              gap="10px"
              cssOverride={{ position: 'relative' }}
            >
              {
              isLoggedIn ? (
                <>
                  <div
                    css={{ display: 'flex', gap: '12px' }}
                    role="presentation"
                    onClick={toggleDropdown}
                    ref={toggleContainerRef}
                  >
                    <Avatar
                      size="small"
                      css={{ borderRadius: '15px' }}
                      src={memberInfo?.profile_image}
                    />
                    <img
                      src={dropDown}
                      alt="dropDown"
                      css={{ width: '10px' }}
                      role="presentation"
                    />
                  </div>
                  {isDropdownOpen && (
                    <HeaderDropdown
                      toggleContainerRef={toggleContainerRef}
                      close={() => { setIsDropdownOpen(false); }}
                    />
                  )}
                </>
              ) : (
                <Button onClick={() => setIsLoginModalOpen(true)}>
                  로그인
                </Button>
              )
            }
            </Container>
          </Container>
        </Container>
      </Container>
      {
        isLoginModalOpen
          && <LoginModal open={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      }
    </>
  );
}

interface HeaderDropdownProps {
  close: () => void;
  toggleContainerRef: RefObject<HTMLDivElement>;
}
function HeaderDropdown({ close, toggleContainerRef }: HeaderDropdownProps) {
  const { logout } = useContext(MemberInfoContext);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current
        && !dropdownRef.current.contains(event.target as Node)
        && toggleContainerRef.current
        && !toggleContainerRef.current.contains(event.target as Node)) {
        close();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close, toggleContainerRef]);
  const dropdownStyle = css`
    position: absolute;
    right: 0;
    top: 50px;
    width: 180px;
    background: white;
    font-size: 13px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index: 1000;
    padding: 5px 5px;
  `;
  const menuStyle = css`
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 10px 10px;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
    }
`;
  return (
    <div css={dropdownStyle} ref={dropdownRef}>
      <ul css={menuStyle}>
        <Link to={routePaths.MY_STUDY} css={{ textDecoration: 'none', color: 'black' }}>
          <li>내 스터디</li>
        </Link>
        <li>설정</li>
        <li role="presentation" onClick={() => logout()}>로그아웃</li>
      </ul>
    </div>
  );
}

export default Header;

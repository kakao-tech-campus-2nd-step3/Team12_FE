import Container from '@components/container';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { css, useTheme } from '@emotion/react';
import logo from '@assets/logo.svg';
import alarm from '@assets/icons/alarm.svg';
import dropDown from '@assets/icons/dropdown.svg';
import { useContext, useState } from 'react';
import { rootWidth } from '@styles/length';
import { MemberInfoContext } from '@providers/MemberInfoProvider';
import LoginModal from '@features/modal/login/LoginModal';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { memberInfo, isLoggedIn } = useContext(MemberInfoContext);
  const theme = useTheme();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <Container
        cssOverride={
        css`background-color: ${theme.colors.background.main}; box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); position: relative;`
      }
      >
        <Container
          justify="space-between"
          padding="20px"
          height="60px"
          width={rootWidth}
        >
          <img
            src={logo}
            alt="logo"
            css={{ width: '75px' }}
          />
          <Container
            width="auto"
            gap="20px"
          >
            <Button css={css`
            width: 140px;
            height: 35px;
            font-size:14px;
            border-color: #ECEDEE;
          `}
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
                  <Container
                    gap="12px"
                    onClick={toggleDropdown}
                  >
                    <Avatar
                      size="small"
                      css={{ borderRadius: '15px' }}
                      src={memberInfo?.profileImage}
                    />
                    <img
                      src={dropDown}
                      alt="dropDown"
                      css={{ width: '10px' }}
                      role="presentation"
                    />
                  </Container>
                  {isDropdownOpen && (
                    <Dropdown />
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

function Dropdown() {
  const { logout } = useContext(MemberInfoContext);
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
    <div css={dropdownStyle}>
      <ul css={menuStyle}>
        <li>내 스터디</li>
        <li>설정</li>
        <li role="presentation" onClick={() => logout()}>로그아웃</li>
      </ul>
    </div>
  );
}

export default Header;

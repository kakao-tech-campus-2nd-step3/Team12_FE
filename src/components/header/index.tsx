import Container from '@components/container';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { css, useTheme } from '@emotion/react';
import logo from '@assets/logo.svg';
import alarm from '@assets/icons/alarm.svg';
import dropDown from '@assets/icons/dropdown.svg';
import { useState } from 'react';
import { rootWidth } from '@styles/length';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const theme = useTheme();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <Container cssOverride={css`background-color: ${theme.colors.background.main}; box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1); position: relative;`}>
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
          >
            <Avatar
              size="small"
              css={{ borderRadius: '15px' }}
              onClick={toggleDropdown}
            />
            <img
              src={dropDown}
              alt="dropDown"
              css={{ width: '10px' }}
              onClick={toggleDropdown}
              role="presentation"
            />
            {isDropdownOpen && (
            <Dropdown />
            )}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

function Dropdown() {
  return (
    <div css={dropdownStyle}>
      <ul css={menuStyle}>
        <li>내 스터디</li>
        <li>설정</li>
        <li>로그아웃</li>
      </ul>
    </div>
  );
}

export default Header;

const dropdownStyle = css`
  position: absolute;
  right: 50px;
  top: 65px;
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

import Container from '@components/container';
import Button from '@components/button';
import Avatar from '@components/avatar';
import { css } from '@emotion/react';
import logo from '@assets/logo.svg';
import alarm from '@assets/icons/alarm.svg';
import dropDown from '@assets/icons/dropdown.svg';
import { useState } from 'react';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <Container
      justify="space-between"
      padding="50px 150px"
      height="150px"
      cssOverride={css`box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2); position: relative;`}
    >
      <img
        src={logo}
        alt="logo"
        css={css`
               width: 170px;
           `}
      />
      <Container
        width="auto"
        cssOverride={css`gap: 50px;`}
      >
        <Button css={css`
          width: 290px;
          height: 85px;
          font-size:33px;
          font-weight: bold;
        `}
        >
          스터디 생성하기
        </Button>
        <img src={alarm} alt="alarm" css={css`width: 40px;`} />
        <Container
          width="auto"
          padding="0"
          cssOverride={css`gap: 10px;`}
        >
          <Avatar
            css={css`
                width: 60px;
                height: 60px;
                border-radius: 30px;
            `}
            onClick={toggleDropdown}
          />
          <img
            src={dropDown}
            alt="dropDown"
            css={css`width: 15px;`}
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
          <div
            css={css`
                position: absolute;
                right: 100px;
                top: 150px;
                width: 300px;
                background: white;
                font-size: 30px;
                box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
                border-radius: 8px;
                z-index: 1000;
                padding: 10px 10px;
              `}
          >
            <ul
              css={css`
                  list-style: none;
                  padding: 0;
                  margin: 0;
                  li {
                    padding: 20px 20px;
                    cursor: pointer;
                    &:hover {
                      background-color: #f0f0f0;
                    }
                  }
                `}
            >
              <li>내 스터디</li>
              <li>설정</li>
              <li>로그아웃</li>
            </ul>
          </div>
          )}
        </Container>
      </Container>
    </Container>
  );
}

export default Header;

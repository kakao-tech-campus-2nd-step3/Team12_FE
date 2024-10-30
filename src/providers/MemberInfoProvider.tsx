import {
  createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState,
} from 'react';
import { Member } from '@/types/member';
import { tokenStorage } from '@/utils/storage';
import { getMyInfo } from '@/api/member';

interface MemberInfoContextValue {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  memberInfo?: Member;
  setMemberInfo: Dispatch<SetStateAction<Member | undefined>>;
}

interface MemberInfoContextProps {
  children?: ReactNode;
}

export const MemberInfoContext = createContext<MemberInfoContextValue>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setMemberInfo: () => {},
});

export function MemberInfoContextProvider({ children }: MemberInfoContextProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberInfo, setMemberInfo] = useState<Member>();

  useEffect(() => {
    (async () => {
      const token = tokenStorage.get();
      if (!token) return;
      try {
        const myInfo = await getMyInfo();
        setIsLoggedIn(true);
        setMemberInfo(myInfo);
      } catch (e) {
        // TODO: 에러 코드를 통해 token이 만료되어서 발생한 에러인지 확인 후 토큰 초기화
        tokenStorage.set();
      }
    })();
  }, []);

  return (
    <MemberInfoContext.Provider value={{
      isLoggedIn, setIsLoggedIn, memberInfo, setMemberInfo,
    }}
    >
      {children}
    </MemberInfoContext.Provider>
  );
}

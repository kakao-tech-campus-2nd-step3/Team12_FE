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
        // TODO: 에러 처리. 토큰 에러는 interceptor에서 처리됨
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

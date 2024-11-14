import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import routePaths from '@constants/routePaths';
import { Member } from '@/types/member';
import { tokenStorage } from '@/utils/storage';
import { getMyInfo } from '@/api/member';

interface MemberInfoContextValue {
  isLoggedIn: boolean;
  logout: () => void;
  login: (token: string) => void;
  memberInfo?: Member;
  setMemberInfo: Dispatch<SetStateAction<Member | undefined>>;
}

interface MemberInfoContextProps {
  children?: ReactNode;
}

export const MemberInfoContext = createContext<MemberInfoContextValue>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  setMemberInfo: () => {},
});

export function MemberInfoContextProvider({ children }: MemberInfoContextProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [memberInfo, setMemberInfo] = useState<Member>();
  const logout = useCallback(() => {
    setMemberInfo(undefined);
    setIsLoggedIn(false);
    tokenStorage.remove();
    window.location.reload();
  }, [setIsLoggedIn, setMemberInfo]);

  const login = useCallback((token: string) => {
    tokenStorage.set(token);
  }, []);

  useEffect(() => {
    (async () => {
      const token = tokenStorage.get();
      if (!token) return;
      try {
        const myInfo = await getMyInfo();
        setIsLoggedIn(true);
        setMemberInfo(myInfo);
        if (!myInfo.nickname && window.location.pathname !== routePaths.SUBMIT_PERSONAL_INFO) {
          window.location.href = routePaths.SUBMIT_PERSONAL_INFO;
        }
      } catch (e) {
        // TODO: 에러 처리. 토큰 에러는 interceptor에서 처리됨
      }
    })();
  }, []);

  return (
    <MemberInfoContext.Provider value={{
      isLoggedIn, login, logout, memberInfo, setMemberInfo,
    }}
    >
      {children}
    </MemberInfoContext.Provider>
  );
}

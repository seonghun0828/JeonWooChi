import axios, { HeadersDefaults } from 'axios';
import { NavigateFunction } from 'react-router-dom';

/**
 * 기존 HeadersDefaults 타입에 Authorization 추가
 */
interface HeaderWithAuthorization extends HeadersDefaults {
  Authorization: string;
}

/**
 * 카카오 로그인 액세스 코드를 서버로 전송 후 JWT 액세스 토큰을 받아 헤더에 추가하는 API
 *
 * @param token 카카오 로그인 액세스 토큰
 * @returns JWT 액세스 토큰
 * @author Sckroll
 */
const getJwtAccessToken = async (token: string, navigate: NavigateFunction) => {
  // isUser - true: 가입되어 있는 유저 / false: 신규 유저
  const {
    data: { accessToken, isUser },
  } = await axios({
    method: 'get',
    url: '/user-service/login/kakao',
    params: {
      token,
    },
  });
  // 신규 가입 유저
  if (!isUser) navigate('/interest');
  // Axios 헤더에 액세스 토큰 추가
  (
    axios.defaults.headers as HeaderWithAuthorization
  ).Authorization = `Bearer ${accessToken}`;

  return accessToken;
};

export default getJwtAccessToken;
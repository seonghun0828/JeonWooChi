import { useEffect } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

import { MapData } from '../../mocks/handlers/festival_list';
import { bgmOff } from '../../utils/mapBgm';

import Image from '../atoms/Image';
import Link from '../atoms/Link';
import Sheet from '../atoms/Sheet';
import Text from '../atoms/Text';
import Weather from '../atoms/Weather';
import FestivalInfos from './FestivalInfos';

interface PropTypes {
  info: MapData | null;
  weatherInfo: any;
  newsInfo: any;
  navigate: NavigateFunction;
}
interface WeatherType {
  data: string;
  sky: string;
  tmn: string;
  tmx: string;
}
const StyledFestivalDetail = styled.div`
  width: 100%;
`;
const InnerSheet = styled.div`
  ${tw`flex flex-col`}
  width: 100%;
  height: 94.5vh;
  gap: 1rem;
`;
const StyledFestivalInfo = styled.div`
  ${tw`flex flex-col`}
  height: 30vh;
  gap: 1rem;
`;
const WeatherInfo = styled.div`
  gap: 1rem;
`;
const WeatherWrapper = styled.div``;
const TempInfo = styled.div`
  ${tw`flex items-center`}
  gap: 1rem;
`;
const WeatherIcon = styled.div`
  width: 3rem;
`;
const NewsInfo = styled.div`
  height: 15vh;
`;

/**
 * 축제 상세 정보 컴포넌트
 * 축제에 대한 기본적인 정보와 날씨, 관련 기사, 추천 맛집
 * Map API 왼쪽에 렌더링
 *
 * @author jojo
 */
const FestivalDetail = ({
  info,
  weatherInfo,
  newsInfo,
  navigate,
}: PropTypes) => {
  const clickHandler = () => {
    bgmOff();
    // navigate(-1);
    location.href = '/game';
  };
  const newsTitles = newsInfo?.map(({ title }: { title: string }) => {
    return title
      .replaceAll('&apos;', '')
      .replaceAll('<b>', '')
      .replaceAll('</b>', '');
  });

  return (
    <StyledFestivalDetail>
      <Sheet>
        <InnerSheet>
          <Text
            clickHandler={clickHandler}
            color="white"
            message="< 이전 화면으로"
          />
          {info ? (
            <>
              <StyledFestivalInfo>
                <Text color="white" message={info.festivalName} size={1.5} />
                <FestivalInfos info={info} size={1.2} />
              </StyledFestivalInfo>
              {/* 나중에 title mouseover 시 나타나게 구현 */}
              {/* <StyledPoster>
                <Image src={info.posterUrl} alt="poster" />
              </StyledPoster> */}
            </>
          ) : (
            <Text color="white" message="로딩 중입니다..." />
          )}
          <WeatherInfo>
            <Text color="white" message="날씨 예보" size={1.3} />
            {weatherInfo ? (
              weatherInfo.map(({ data, sky, tmn, tmx }: WeatherType) => {
                const date =
                  data.slice(0, 4) +
                  '-' +
                  data.slice(4, 6) +
                  '-' +
                  data.slice(6, 8);
                return (
                  <WeatherWrapper key={data + sky + tmn + tmx}>
                    <Text color="white" message={date} size={1.2} />
                    <TempInfo>
                      <WeatherIcon>
                        <Weather code={sky[0]} />
                      </WeatherIcon>
                      <Text color="white" message="최저" size={1.1} />
                      <Text color="white" message={tmn} size={1.1} />
                      <Text color="white" message="최고" size={1.1} />
                      <Text color="white" message={tmx} size={1.1} />
                    </TempInfo>
                  </WeatherWrapper>
                );
              })
            ) : (
              <Text color="white" message="로딩 중입니다..." />
            )}
          </WeatherInfo>
          <NewsInfo>
            <Text color="white" message="관련 기사" size={1.3} />
            {newsInfo && newsInfo.length > 0 ? (
              <>
                <Link href={newsInfo[0].link} color="skyblue">
                  {'- ' + newsTitles[0].substring(0, 25)}
                </Link>
                <br />
                <Link href={newsInfo[1].link} color="skyblue">
                  {'- ' + newsTitles[1].substring(0, 25)}
                </Link>
              </>
            ) : (
              <Text color="white" message="관련 기사가 존재하지 않습니다." />
            )}
          </NewsInfo>
        </InnerSheet>
      </Sheet>
    </StyledFestivalDetail>
  );
};

export default FestivalDetail;

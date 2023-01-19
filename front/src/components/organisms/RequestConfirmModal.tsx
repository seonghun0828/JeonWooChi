import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from '../atoms/Button';
import Sheet from '../atoms/Sheet';
import Text from '../atoms/Text';
import TitleCancelHeader from './TitleCancelHeader';
import { useQuery } from '@tanstack/react-query';
import { festivalRequestPage } from '../../recoil/atoms/festivalRequestPage';
import { useRecoilState } from 'recoil';
import { festivalRequestId } from '../../recoil/atoms/festivalRequestId';
import getFestivalRequestList from '../../api/getFestivalRequestList';
import { inputProps, labelProps } from './RequestModal';
import submitRequest from '../../api/submitRequest';
import Link from '../atoms/Link';

interface PropTypes {
  setState: Dispatch<SetStateAction<boolean>>;
  setOpenedList: Dispatch<SetStateAction<boolean>>;
}
interface InputTypes {
  [index: string]: string;
  festivalName: string;
  startDate: string;
  endDate: string;
  address: string;
}
const StyledRequestModal = styled.div`
  width: 40vw;
  height: 70vh;
  z-index: 1;
`;
const InnerSheet = styled.div`
  ${tw`flex flex-col justify-between`}
  width: 100%;
  height: 70vh;
  gap: 1rem;
`;
const SheetBody = styled.div`
  ${tw`flex flex-col items-center`}
  width: 100%;
  gap: 1rem;
`;
const InputLine = styled.div`
  ${tw`flex`}
  width: 90%;
  gap: 1rem;
`;
const FlexLabel = styled.div`
  ${tw`flex justify-end`}
  width: 30%;
`;
const FlexInput = styled.div`
  ${tw`flex justify-start`}
  width: 70%;
`;
const SubmitButton = styled.div`
  ${tw`flex justify-center`}
  width: 100%;
`;

/**
 * 축제 요청 상세 모달.
 * 축제 요청에 대한 자세한 정보를 보고 승인할 수 있다.
 *
 * @author jojo
 */
const RequestConfirmModal = ({ setState, setOpenedList }: PropTypes) => {
  const [page, setPage] = useRecoilState(festivalRequestPage);
  const { data } = useQuery(['festivalRequests', page], () =>
    getFestivalRequestList(page, 5),
  );
  const [requestId, setRequestId] = useRecoilState(festivalRequestId);

  const request: InputTypes = data.content.filter(
    ({ id }: { id: number }) => id === requestId,
  )[0];

  const submitRequestHandler = () => {
    submitRequest(requestId, setState);
  };

  return (
    <StyledRequestModal>
      <Sheet transparent>
        <InnerSheet>
          <TitleCancelHeader
            setState={setState}
            setOpenedList={setOpenedList}
            title="축제 요청 확인"
            color="white"
          />
          <SheetBody>
            {inputProps.map((arr, idx) => {
              // if (idx >= 4) return;
              return (
                <InputLine key={idx}>
                  <FlexLabel>
                    <Text message={labelProps[idx]} />
                  </FlexLabel>
                  {idx === 5 ? (
                    <FlexInput>
                      <Link href={request[inputProps[idx][0]]} color="skyblue">
                        클릭해서 보기
                      </Link>
                    </FlexInput>
                  ) : (
                    <FlexInput>
                      <Text message={request[inputProps[idx][0]]} />
                    </FlexInput>
                  )}
                </InputLine>
              );
            })}
          </SheetBody>
          <SubmitButton>
            <Button isText clickHandler={submitRequestHandler}>
              <Text message="승인" color="black" />
            </Button>
          </SubmitButton>
        </InnerSheet>
      </Sheet>
    </StyledRequestModal>
  );
};

export default RequestConfirmModal;

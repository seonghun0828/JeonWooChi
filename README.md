## 프로젝트 개요

![image 16.png](images/image_16.png)

- **전.우.치 - 전국 우리 지역잔치**
- 지역 축제를 기반으로 하는, 게이미피케이션을 접목시킨 지역 상권 맞춤 추천 서비스
- 프로젝트 진행 기간 : 22.08.22 ~ 22.10.07 (7주)

## 기획 의도

1. 전국에 많은 지역축제들이 진행되고 있지만  개최 비용에 비해 관광객들이 부족
2. 코로나19 사태까지 더해져 지역 경제에 치명적인 타격

⇒ 지역경제 활성화를 위해서 지역 축제를 추천해주며, 그 축제를 기반으로 한 지역 상권 맞춤 추천 서비스를 개발.

## 직접 구현한 주요 기능

### 1. 미니맵    

- 최초 설계와 구현에서는 너무 느려 사용할 수 없던 미니맵을 최적화했습니다.
- 초 단위로 좌표를 갱신하는 최적화를 통해 성능 향상을 이끌어 냈습니다.   

    [코드 보기](https://github.com/seonghun0828/JeonWooChi/blob/master/front/src/components/organisms/Minimap.tsx)
    
    <img src="images/background.gif" width='100%' />
    
### 2. 메인(게임) 페이지 UI
        
- 축제 추천 사이드 바

    - 3개의 축제를 사이드에 띄워 유저에게 추천해줍니다.
    - 토글하여 접어 놓을 수 있습니다.
    
        [코드 보기](https://github.com/seonghun0828/JeonWooChi/blob/master/front/src/components/organisms/FestivalSideBar.tsx)
    
    ![Untitled](images/Untitled%2010.png)
    
- 축제 상세 모달   

    - 축제 오브젝트에 접근하면 Enter 키를 누르라는 알림 창이 뜨게 됩니다.
    - Enter 키를 누르면 축제 상세 정보가 적힌 모달이 띄워집니다.
    - 모달 안의 상세보기 버튼을 클릭하면 Map 화면으로 넘어갑니다.
    
        [코드 보기](https://github.com/seonghun0828/JeonWooChi/blob/master/front/src/components/organisms/FestivalInfos.tsx)
    
    <img src="https://user-images.githubusercontent.com/31424628/213121054-2d30e9a6-c035-438e-848f-0d3caebb0912.png" width="100%" />

    
- 축제 요청 모달

    - 관리자가 아닌 일반 유저에게는 오른쪽 상단에 축제 요청 버튼이 보입니다.
    - 아직 서비스에 등록되지 않은 축제를 유저가 직접 양식에 맞게 작성해 요청할 수 있습니다.
    
        [코드 보기](https://github.com/seonghun0828/JeonWooChi/blob/master/front/src/components/organisms/RequestModal.tsx)
    
    ![Untitled](images/Untitled%2011.png)
        
### 3. 관리자 기능

- 축제 요청 목록 확인
    - 관리자로 접속하면 오른쪽 상단에 축제 요청 확인 버튼이 보입니다.
    - 유저들이 요청한 축제 목록을 확인할 수 있습니다.
    
        [코드 보기](https://github.com/seonghun0828/JeonWooChi/blob/master/front/src/components/organisms/RequestModal.tsx)

    ![Untitled](images/Untitled%2013.png)

- 축제 요청 상세 모달
    - 유저가 요청한 축제를 승인할 수 있고 승인 시 축제가 화면에 추가되게 됩니다.
    
        [코드 보기](https://github.com/seonghun0828/JeonWooChi/blob/master/front/src/components/organisms/RequestConfirmModal.tsx)

    ![Untitled](images/Untitled%2014.png)

## 프로젝트 다른 주요 기능

### 맵 API 페이지

- 맵 페이지
    
    ![ezgif.com-gif-maker.gif](images/ezgif.com-gif-maker.gif)
    

## 기술 스택

![Untitled](images/Untitled%201.png)

## 팀원 소개

![Untitled](images/Untitled.png)


## 프로젝트 산출물

### ERD

![Untitled](images/Untitled%202.png)

[B305](https://www.erdcloud.com/d/K4EQ2JnzYaNjfYRQS)

### 와이어프레임

![Untitled](images/Untitled%203.png)

[Wireframe & Prototype](https://www.figma.com/file/qUJlGP31zimruQ4W7y6Ohe/Wireframe?node-id=0%3A1)

### 기능 명세서

![Untitled](images/Untitled%204.png)

[Google Sheets: Sign-in](https://docs.google.com/spreadsheets/d/1ZR_JRWl4DfAMSjAA9PDDy_kkWjp2DiKoowk5YNNx5B8/edit#gid=0)

### API 명세서

![Untitled](images/Untitled%205.png)

![Untitled](images/Untitled%206.png)

[Google Sheets: Sign-in](https://docs.google.com/spreadsheets/d/1ZR_JRWl4DfAMSjAA9PDDy_kkWjp2DiKoowk5YNNx5B8/edit#gid=1564946130)

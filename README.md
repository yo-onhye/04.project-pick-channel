# SNS 연동 구현 👻

## Description.

- `react-router-dom`으로 채널 별 페이지 나누어 노출
- 일부 SNS 연동 시 불러올 수 없는 이슈가 있어, Youtube채널 ID 값을 입력받아 해당 채널 영상 최근 업로드 50개씩 불러올 수 있도록 기획 변경
- 사용자가 원하는 특정 계정 영상 리스트 Youtube에서 받아와 노출
- Skeleton Loader 구현

## Tech Stack.

React, Axios, Route, JQuery, Css

## Process

**07.18**

- LNB 컴포넌트를 추가하여 사용자로부터 값을 입력받는 창 노출
- LNB 오픈 시 입력창과 함께 현재 채널 리스트 노출
- 채널 리스트 CRUD 기능 추가

**07.25**

- temp 값으로 채널 리스트 객체 구성
- temp 값을 기반으로 LNB 노출
- temp 값을 Youtube 컴포넌트로 넘겨 prop받은 데이터 기준으로 유투브 API 불러오기 구현 (첫 페이지 데이터는 불러오지만, 다음 페이지 데이터는 불러오지 못함)

**07.26**

- data loading UI 업데이트
- temp 값을 기반으로 channel 리스트 노출 (어제 오류 수정)

**07.27**

- LNB clickoutside 기능 추가

**07.28**

- 로그인 페이지 생성 및 페이지 연결

**07.29**

- 로그인 페이지 사용자 인증 기능 구현 완료 (`checkUserAccount` 추가)
- 아이디, 비밀번호 유효성 검사 추가

## Link.

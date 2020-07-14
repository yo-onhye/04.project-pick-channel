# SNS 연동 구현 👻

## Description.

- `react-router-dom`으로  SNS별 페이지 나누어 노출 (인스타그램이 default)
- 일부 SNS 연동 시 사용자 정보를 입력받아 불러올 수 없는 이슈가 있어, Youtube채널 ID 값을 입력받아 해당 채널 영상 최근 업로드 50개씩 불러올 수 있도록 기획 변경
- Youtube에서 특정 계정 정보 받아와 노출 → FNC 계정 중 SF9 플레이리스트 가져와 연결
- Skeleton Loader 구현

## Issue.
%PUBLIC_URL% 이슈 발생
→ 주소로 접근 시 빈 화면만 노출

**해결 방안**

package.json에서 `devDependencies`부분을 삭제하니까 해결됨.
정확한 이유는 알아봐야할 것 같다.

## Tech Stack.

React, Axios, Route, JQuery, Css

## Link.
[https://yo-onhye.github.io/04.project-collect-sns](https://yo-onhye.github.io/04.project-collect-sns)
var store = [{
        "title": "[TIL] 2020-10-19",
        "excerpt":"1. github blog 생성     jekyll 적용   docker로 test 환경 구축            docker run –rm –volume=”$PWD:/srv/jekyll” –privileged -p 4000:4000 -it jekyll/jekyll /bin/bash     jekyll serve                    접속할 수 있는 주소를 출력해주면 해당 url로 접속하여 테스트 후 push                           docker로 테스트 환경 구축하면 매우 편리   github은 내장하고 있는 ruby 엔진을 통해 로딩   ","categories": ["TIL"],
        "tags": [],
        "url": "http://0.0.0.0:4000/2020/10/19/TIL/",
        "teaser": null
      },{
        "title": "[TIL] 2020-10-20",
        "excerpt":"1. CLion에서 github 연동     WSL            형상 관리를 위해 CLion과 Git을 연동했다. Git을 직접 설치한 후 경로를 잡아도 되지만, WSL을 이용하면 CLion에서 자동으로 WSL에 설치된 git path를 잡는다고 한다.       WSL 정리 -&gt; 추후 페이지 추가           CLion에서 git 사용            Alt + `          ","categories": ["TIL"],
        "tags": [],
        "url": "http://0.0.0.0:4000/2020/10/20/TIL/",
        "teaser": null
      },{
        "title": "[TIL] 2020-10-21",
        "excerpt":"1. docker 설치 후 wsl과 연동 docker에서 jekyll 엔진을 구동하기 위해서는 회사 개발 컴퓨터로 접속해야만 했다. 이제는 WSL을 통해 Windows에서도 docker 사용할 수 있다! docker 설치 후 docker setting에서 WSL 연동할 수 있도록 몇 가지 설정만 하면 되서 매우 편리하다. microsoft docs에 방법이 잘 정리되어 있다. 2. Unix Network Programming...","categories": ["TIL"],
        "tags": [],
        "url": "http://0.0.0.0:4000/2020/10/21/TIL/",
        "teaser": null
      },{
        "title": "[TIL] 2020-10-23",
        "excerpt":"1. WebServer 개발 network layer 소스 강화 내가 담당 중인 WebServer 제품에서는 epoll, select, devpoll 등이 직접 구현되어 있다. 새롭게 만들 C++ WebServer에서는 직접 구현하기 보다는 boost나 libev등을 써볼 계획이다. 우선 boost에 대해 조사했고, 내일 직접 빌드해서 써보려고 한다. 2. jekyll permalink 수정 기본 permalink(_config.yaml)가 /:category/:tag/로 되어 있어 post가 정상적으로...","categories": ["TIL"],
        "tags": [],
        "url": "http://0.0.0.0:4000/2020/10/23/TIL/",
        "teaser": null
      },{
        "title": "[TIL] 2020-10-24",
        "excerpt":"1. AF_INET/PF_INET 차이점 UNP 복습 중, AF_INET과 PF_INET의 차이점이 궁금해 조사하였다. AF_INET은 주소 체계 패밀리로, sockaddr_in에서 socket의 주소를 정할 때 설정하는 값이다. PF_INET은 프로토콜 패밀리로, 실제 socket 함수로 연결 방식을 정할 때 설정하는 값이다. AF_INET과 PF_INET은 같은 값을 가진다(#define PF_INET AF_INET). 그럼에도 분리되어 있는 이유는, socket에 대해 처음 설계할 때...","categories": ["TIL"],
        "tags": [],
        "url": "http://0.0.0.0:4000/2020/10/24/TIL/",
        "teaser": null
      },{
        "title": "[C++] Reference",
        "excerpt":"Reference(참조자) C++은 참조자라는 특수한 종류의 변수를 제공한다. 객체 지향의 다형성 개념을 지원하기 위함이라는데, 상속 및 가상 함수, 가상 테이블을 배운 뒤 다시 이해해 보도록 해야겠다. 선언 시 타입에 &amp;를 붙여 표현한다. ex) int &amp;a = 변수; 변수를 참조하는(가리키는) 목적으로 사용되며, 스택에 저장되는 일반 변수와 달리 별도의 저장 공간을 가지지 않는다....","categories": ["C++"],
        "tags": [],
        "url": "http://0.0.0.0:4000/2020/11/01/C++/",
        "teaser": null
      }]

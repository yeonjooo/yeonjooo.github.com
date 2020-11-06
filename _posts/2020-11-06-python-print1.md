---
title: "[Python] print1"
date: 2020-11-06 

category: Python 
toc: true
---

## print()
- ""로 하나 ''로 하나 결과 동일
- print()
	- 결과 값: 공백
- seperator
	- print 함수의 인자로 들어온 값들을 특정 값으로 이어주고자 할 때 사용
	- 값을 지정하지 않으면 기본 값은 공백이다.
	-   ``` 
	    print('T','E','S','T')
		print('T','E','S','T', sep='')
		print('2020','09','01', sep='-')
		```
		```
		T E S T
		TEST
		2020-09-01
		```
- end
	- print()는 문자열 출력 후 자동으로 개행이 된다.
	- end를 사용하면 사용자가 지정한 값을 문자열 끝에 넣을 수 있다.
	- ```
	  print("hi", end=' ')
	  print("lyj", end=' ')
	  print("good")
	  ```
	  ```
	  hi lyj good
	  //개행
	  ```

## 알게 된 것들
- python에는 main이 필요 없다.
- ```
   if __name__ == '__main__':
    print_hi('PyCharm')
  ```
- 위와 같이 __main__을 지정할 경우 해당 부분이 진입점이 된다.
  - 프로젝트 단위로 개발할 때(파일이 아니고) 쓰일 것 같다.
  

---
title: "[Python] string"
date: 2020-11-07 

category: Python 
toc: true
---

## raw string
- 특수 문자를 사용하고 싶은 경우 escape 문자를 사용한다.
	- ex) "\\"
- raw string을 사용하면 문자를 있는 그대로 출력할 수 있다.
	- r".."
	- ```
	   raw_str = r"C:\Programs\Test"
	   print(raw_str)# C\Programs\Test
	   ```
	- 보통 path를 나타낼 때 많이 사용한다.

## multi line
- 변수 선언 후 escape 문자인 \\를 사용하면 multiline으로 선언할 수 있다.
	- ```
	  multi = \
	  """
	  abc
	  def
	  """
	  print(multi)
	  ```

## slicing
- [x:y]
	- y 직전까지 출력
- [x:y:z]
	- z는 스킵 단위
	- -1인 경우 역순으로 슬라이싱 하는 것을 의미
- ```
    a = 'niceman'
    b = 'orange'
    print(a[0:4]) # 0~3 인덱스 출력(4-1)
    print(a[0:len(a)]) # 길이를 직접 명시하는 것보단 len 함수 쓰는게 좋다
    print(a[:]) #모든 문자열 출력
    print(b[0:4:2]) #두 칸씩 점프하며 3번째 인덱스까지 출력(on)
    print(b[1:-2] #뒤에서 두번째 인덱스 바로 전까지 출력(ran)
    print(b[::-1) #egnaro

  ```

## string 연산
- in
	- 해당 문자 또는 문자열이 string에 존재하는지 여부를 반환
	- print('a' in "abc") //True
	- print("abc" in "def") //False
	- not in은 반대
	
## 알게 된 것들
- str1 = "abc"와 같은 string 변수는 값이 한 번 정해지면 바꿀 수 없다.


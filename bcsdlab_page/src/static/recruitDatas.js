const recruitDatas = [
  {
    'position': 'Beginner',
    'contents': {
      'name': '프론트엔드 트랙 Beginner 모집',
      'track': 'FrontEnd',
      'tags': ['Web FrontEnd', 'Beginner', 'React', 'JavaScript', 'HTML', 'CSS']
    },
    'period': '2022년 하반기',
    'path': ['frontend-beginner', 'frontend'],
    'qualification': ['웹 프로그래밍 과목을 수강한 학우', '웹 프론트엔드 개발에 흥미가 있는 학우', '꼼꼼하고 섬세한 학우', '적극적으로 디자이너와 의사소통할 수 있는 학우', 'React를 배워보고 싶은 학우'],
    'learningContents': ['웹 3요소에 대한 기본 지식', '프론트엔드 개발에 필요한 기본적인 네트워크 지식', 'React에 대한 이해와 활용'],
    'process': '지원서 접수 -> 지원서 검토 -> 커리큘럼 진행 -> 회고'

  },
  {
    'position': 'Beginner',
    'contents': {
      'name': '백엔드 트랙 Beginner 모집',
      'track': 'BackEnd',
      'tags': ['Web BackEnd', 'Beginner', 'Java', 'Spring', 'MySQL', 'Redis', 'AWS', 'Jenkins']
    },
    'period': '2022년 하반기',
    'path': ['backend-beginner', 'backend'],
    'qualification': ['Java 사용 경험이 있는 학우', '백엔드가 어떻게 구성되는지 알고 싶은 학우', '자신이 맡은 일에 최선을 다 할 수 있는 학우'],
    'learningContents': ['데이터베이스 기본 개념', 'Spring Framework의 구조와 특징', '보안과 암호화 기초 이론 및 실습'],
    'process': '지원서 접수 -> 지원서 검토 -> 커리큘럼 진행 -> 회고'
  },
  {
    'position': 'Beginner',
    'contents': {
      'name': '안드로이드 트랙 Beginner 모집',
      'track': 'Android',
      'tags': ['Android', 'Beginner', 'Java', 'Kotlin', 'Retrofit2', 'Glide', 'RxJava']
    },
    'period': '2022년 하반기',
    'path': ['android-beginner', 'android'],
    'qualification': ['Java를 접해본 사람(필수 아님)', '안드로이드에 관심이 많으신 분'],
    'learningContents': ['Android 기초', 'Android 기본 view', 'Fragment', 'Android 4대 컴포넌트(Activity, Service, Broadcast Receiver, Content Provider)', 'Android open source library'],
    'process': '지원서 접수 -> 지원서 검토 -> 커리큘럼 진행 -> 회고'
  },
  {
    'position': 'Beginner',
    'contents': {
      'name': '게임 트랙 Beginner 모집',
      'track': 'Game',
      'tags': ['Game', 'Beginner', 'Unity', 'Unreal', 'Cocos', 'C++', 'C#']
    },
    'period': '2022년 하반기',
    'path': ['game-beginner', 'game'],
    'qualification': ['게임 제작에 흥미가 있는 학우', '게임을 좋아하는 학우'],
    'learningContents': ['Unity, Unreal 등의 게임 엔진', '게임 엔진에서 사용하는 프로그래밍 언어', '컴퓨터 그래픽스', '3D 수학'],
    'process': '지원서 접수 -> 지원서 검토 -> 커리큘럼 진행 -> 회고'
  },
  {
    'position': 'Beginner',
    'contents': {
      'name': 'UI/UX 트랙 Beginner 모집',
      'track': 'UI/UX',
      'tags': ['UX/UX', 'Beginner', 'GUI', 'AdobeXD', 'Zeplin']
    },
    'period': '2022년 하반기',
    'path': ['uiux-beginner', 'uiux'],
    'qualification': ['UI/UX로 커리어를 지향하는 학우', '디테일을 꼼꼼하게 체크할 수 이는 학우', '적극적으로 개발자들과 의사소통할 수 있는 학우', '기본 그래픽툴(PS, AI)을 다룰 줄 아는 학우'],
    'learningContents': ['UI/UX 기초 교육', '디자인 툴 교육', '협업 프로세스 교육', 'GUI 디자인 실습'],
    'process': '지원서 접수 -> 지원서 검토 -> 커리큘럼 진행 -> 회고'
  }
]

export default recruitDatas

# Canvas Game Library (Beta)

간단한 2D 웹 게임을 만들기 위한 JavaScript 라이브러리입니다.

## 시작하기

```html
<script src="library.js"></script>
<script>
createScene(800, 600);

let player = createSprite("player");

loop(() => {
    if (isKeyPressed("d")) {
        player.goX(5);
    }

    if (isKeyPressed("a")) {
        player.goX(-5);
    }
});
</script>
```

## Scene 생성

캔버스를 생성합니다.

```js
createScene(width, height);
```

예시:

```js
createScene(800, 600);
```

## Sprite 생성

스프라이트를 생성합니다.

```js
let player = createSprite("player");
```

기본값:

* 위치: (0, 0)
* 크기: 50 × 50
* 색상: 검정색

## Sprite 이동

### X축 이동

```js
player.goX(10);
```

### Y축 이동

```js
player.goY(10);
```

## Sprite 위치 설정

```js
player.setLocation(x, y);
```

예시:

```js
player.setLocation(100, 200);
```

## Sprite 크기 설정

```js
player.setSize(width, height);
```

예시:

```js
player.setSize(100, 100);
```

### 너비 설정

```js
player.setWidth(200);
```

### 높이 설정

```js
player.setHeight(200);
```

## Sprite 좌표 설정

### X 좌표 설정

```js
player.setX(150);
```

### Y 좌표 설정

```js
player.setY(150);
```

## Sprite 색상 설정

```js
player.setColor("red");
```

예시:

```js
player.setColor("blue");
```

사용 가능한 값:

```js
player.setColor("red");
player.setColor("blue");
player.setColor("green");
player.setColor("#ff0000");
player.setColor("rgb(255,0,0)");
```

## 키 입력 감지

```js
isKeyPressed(key);
```

예시:

```js
if (isKeyPressed("w")) {
    player.goY(-5);
}
```

```js
if (isKeyPressed("ArrowRight")) {
    player.goX(5);
}
```

## 게임 루프

```js
loop(() => {
    // 매 프레임 실행
});
```

예시:

```js
loop(() => {
    if (isKeyPressed("d")) {
        player.goX(5);
    }
});
```

## 예제

```js
createScene(800, 600);

let player = createSprite("player");

player.setLocation(100, 100);
player.setSize(50, 50);
player.setColor("red");

loop(() => {
    if (isKeyPressed("w")) player.goY(-5);
    if (isKeyPressed("s")) player.goY(5);
    if (isKeyPressed("a")) player.goX(-5);
    if (isKeyPressed("d")) player.goX(5);
});
```

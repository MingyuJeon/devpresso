# nth-child와 nth-of-type

## nth-child
`nth-child`는 자식요소를 태그 종류를 구분하지 않고 오로지 자식요소의 순서에 따라 선택한다.
예를 들어보자.

```html
<div class="ex">
    <h1>Hello World</h1>
    <div>Hi</div>
    <div>내가 원하는 녀석</div>
</div>
```

```css
.ex {
    ...
}

.ex > div:nth-child(3) {...}
.ex > div:nth-of-type(2) {...}

/*이 둘은 동일하다.*/
```

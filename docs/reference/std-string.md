# std::string

字符串工具函数。需导入：`use std::string;`

## starts_with

```link
starts_with(s: str, prefix: str) -> bool
```

判断字符串 s 是否以 prefix 开头。

```link
starts_with("hello world", "hello") == true
starts_with("hello world", "world") == false
starts_with("link", "li") == true
```

## ends_with

```link
ends_with(s: str, suffix: str) -> bool
```

判断字符串 s 是否以 suffix 结尾。

```link
ends_with("hello world", "world") == true
ends_with("test.link", ".link") == true
ends_with("hello", "lo") == true
```

## contains

```link
contains(s: str, needle: str) -> bool
```

判断字符串 s 中是否包含子串 needle。

```link
contains("hello world", "lo w") == true
contains("hello world", "xyz") == false
contains("abc", "") == true

// 在编译器中用于关键字匹配
if contains(line, "struct") {
    // 解析结构体声明
}
```

## repeat

```link
repeat(s: str, n: i64) -> str
```

将字符串 s 重复 n 次，返回拼接结果。

```link
repeat("ab", 3) == "ababab"
repeat("-", 10) == "----------"
```

## is_empty

```link
is_empty(s: str) -> bool
```

判断字符串是否为空（长度为 0）。

```link
is_empty("") == true
is_empty("hello") == false
```

## is_blank

```link
is_blank(s: str) -> bool
```

判断字符串是否全为空白字符（空格、制表符、换行符、回车符）。

```link
is_blank("   ") == true
is_blank("\t\n") == true
is_blank(" x ") == false
is_blank("") == true
```

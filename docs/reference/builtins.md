# 内置函数

编译器内置函数，无需导入，全局可用。

## println

```link
println(value: i64)
```

打印一个整数并换行。

```link
println(42);
// 输出: 42

println(1 + 2 * 3);
// 输出: 7
```

## str_concat

```link
str_concat(left: str, right: str) -> str
```

将两个字符串拼接，返回新字符串。

```link
let s = str_concat("hello ", "world");
// s == "hello world"

let path = str_concat(str_concat("/home/", name), "/file.link");
// 逐级拼接路径
```

## str_len

```link
str_len(s: str) -> i64
```

返回字符串的字节长度。

```link
str_len("hello") == 5
str_len("") == 0

// 判空模式
if str_len(s) == 0 {
    println(0);
}
```

## str_eq

```link
str_eq(a: str, b: str) -> bool
```

比较两个字符串是否相等。

```link
str_eq("abc", "abc") == true
str_eq("abc", "ABC") == false

// 常用于标识符匹配
if str_eq(name, "let") {
    // 解析 let 语句
}
```

## str_substring

```link
str_substring(s: str, start: i64, end: i64) -> str
```

提取字符串 s 中 [start, end) 范围的子串。

```link
str_substring("hello", 0, 2) == "he"
str_substring("hello", 1, 4) == "ell"
```

## str_char_code

```link
str_char_code(s: str, index: i64) -> i64
```

返回字符串位置 index 处字符的 ASCII 码。

```link
str_char_code("A", 0) == 65
str_char_code("abc", 0) == 97
str_char_code("", 0) == -1

// 检测字符类型
let ch = str_char_code(input, pos);
let is_digit = ch >= 48 && ch <= 57;
let is_upper = ch >= 65 && ch <= 90;
```

## file_read

```link
file_read(path: str) -> str
```

读取文件全部内容。如果文件不存在则退出程序。

```link
let source: str = file_read("input.link");
let result: ParseResult = compile_program(&source);
```

## file_write

```link
file_write(path: str, content: str) -> i64
```

将内容写入文件。返回 1 表示成功，0 表示失败。

```link
let written: i64 = file_write("output.c", result.code);
if written == 1 {
    // 写入成功
} else {
    // 写入失败
}
```

## args_len

```link
args_len() -> i64
```

返回命令行参数数量（包括程序自身）。

```link
if args_len() < 3 {
    println(0);
    return;
}
```

## arg

```link
arg(index: i64) -> str
```

返回第 index 个命令行参数。`arg(0)` 是程序名。

```link
let input_path: str = arg(1);
let output_path: str = arg(2);
```

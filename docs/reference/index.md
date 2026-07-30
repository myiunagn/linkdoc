# 函数参考

Link 的内置函数和标准库函数完整参考。

## 内置函数

编译器和运行时直接提供，无需导入。

| 函数 | 签名 | 说明 |
|------|------|------|
| `println` | `println(value: i64)` | 打印整数并换行 |
| `str_concat` | `str_concat(left: str, right: str) -> str` | 拼接两个字符串 |
| `str_len` | `str_len(s: str) -> i64` | 字符串长度 |
| `str_eq` | `str_eq(a: str, b: str) -> bool` | 字符串相等比较 |
| `str_substring` | `str_substring(s: str, start: i64, end: i64) -> str` | 提取子字符串 |
| `str_char_code` | `str_char_code(s: str, index: i64) -> i64` | 获取字符 ASCII 码 |
| `file_read` | `file_read(path: str) -> str` | 读取文件内容 |
| `file_write` | `file_write(path: str, content: str) -> i64` | 写入文件，返回 1 成功 0 失败 |
| `args_len` | `args_len() -> i64` | 命令行参数数量 |
| `arg` | `arg(index: i64) -> str` | 获取第 index 个命令行参数 |

## 标准库

通过 `use` 导入：`use std::math;` `use std::string;`

### std::math

**导入**：`use std::math;`

| 函数 | 签名 | 说明 |
|------|------|------|
| `absolute` | `absolute(value: i64) -> i64` | 绝对值 |
| `minimum` | `minimum(a: i64, b: i64) -> i64` | 取最小值 |
| `maximum` | `maximum(a: i64, b: i64) -> i64` | 取最大值 |
| `clamp` | `clamp(value: i64, lo: i64, hi: i64) -> i64` | 限制值在 [lo, hi] 范围 |
| `fib` | `fib(n: i64) -> i64` | 第 n 个斐波那契数 |
| `factorial` | `factorial(n: i64) -> i64` | n 的阶乘 |
| `ipow` | `ipow(base: i64, exp: i64) -> i64` | base 的 exp 次幂 |
| `is_even` | `is_even(n: i64) -> bool` | 是否偶数 |
| `is_odd` | `is_odd(n: i64) -> bool` | 是否奇数 |
| `sum` | `sum(from: i64, to: i64) -> i64` | 从 from 到 to-1 的累加和 |

### std::string

**导入**：`use std::string;`

| 函数 | 签名 | 说明 |
|------|------|------|
| `starts_with` | `starts_with(s: str, prefix: str) -> bool` | s 是否以 prefix 开头 |
| `ends_with` | `ends_with(s: str, suffix: str) -> bool` | s 是否以 suffix 结尾 |
| `contains` | `contains(s: str, needle: str) -> bool` | s 是否包含 needle |
| `repeat` | `repeat(s: str, n: i64) -> str` | 将 s 重复 n 次 |
| `is_empty` | `is_empty(s: str) -> bool` | 字符串是否为空 |
| `is_blank` | `is_blank(s: str) -> bool` | 字符串是否全空白 |

### std::io

**导入**：`use std::io;`

| 函数 | 签名 | 说明 |
|------|------|------|
| `read_file` | `read_file(path: str) -> str` | 读取文件 |
| `write_file` | `write_file(path: str, content: str) -> i64` | 写入文件 |
| `read_lines` | `read_lines(path: str) -> str` | 读取文件（同 read_file） |
| `print_int` | `print_int(value: i64)` | 打印整数 |

### std::collections

**导入**：`use std::collections;`

| 函数 | 签名 | 说明 |
|------|------|------|
| `sum_list` | `sum_list(xs: LinkList) -> i64` | 列表元素求和 |
| `count_if` | `count_if(xs: LinkList, pred: fn(i64) -> bool) -> i64` | 满足条件的元素个数 |
| `find` | `find(xs: LinkList, pred: fn(i64) -> bool) -> i64` | 查找第一个满足条件的索引，-1 表示未找到 |
| `all` | `all(xs: LinkList, pred: fn(i64) -> bool) -> bool` | 是否全部满足条件 |
| `any` | `any(xs: LinkList, pred: fn(i64) -> bool) -> bool` | 是否有任一满足条件 |
| `reverse` | `reverse(xs: LinkList) -> LinkList` | 反转列表 |
| `max_list` | `max_list(xs: LinkList) -> i64` | 列表最大值 |
| `min_list` | `min_list(xs: LinkList) -> i64` | 列表最小值 |

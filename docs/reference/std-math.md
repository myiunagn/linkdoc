# std::math

数学工具函数。需导入：`use std::math;`

## absolute

```link
absolute(value: i64) -> i64
```

返回 value 的绝对值。

```link
absolute(-5) == 5
absolute(42) == 42
absolute(0) == 0
```

## minimum

```link
minimum(a: i64, b: i64) -> i64
```

返回 a 和 b 中的较小值。

```link
minimum(3, 7) == 3
minimum(-1, 1) == -1
```

## maximum

```link
maximum(a: i64, b: i64) -> i64
```

返回 a 和 b 中的较大值。

```link
maximum(3, 7) == 7
```

## clamp

```link
clamp(value: i64, lo: i64, hi: i64) -> i64
```

将 value 限制在 [lo, hi] 范围内。

```link
clamp(5, 0, 10) == 5
clamp(-5, 0, 10) == 0
clamp(15, 0, 10) == 10
```

## fib

```link
fib(n: i64) -> i64
```

返回第 n 个斐波那契数（递归实现）。fib(0)=0, fib(1)=1。

```link
fib(10) == 55
fib(20) == 6765
```

## factorial

```link
factorial(n: i64) -> i64
```

返回 n 的阶乘 n!。

```link
factorial(5) == 120
factorial(10) == 3628800
```

## ipow

```link
ipow(base: i64, exp: i64) -> i64
```

整数幂运算，返回 base 的 exp 次方。

```link
ipow(2, 10) == 1024
ipow(3, 4) == 81
ipow(5, 0) == 1
```

## is_even

```link
is_even(n: i64) -> bool
```

判断 n 是否为偶数。

```link
is_even(4) == true
is_even(5) == false
```

## is_odd

```link
is_odd(n: i64) -> bool
```

判断 n 是否为奇数。

```link
is_odd(5) == true
is_odd(4) == false
```

## sum

```link
sum(from: i64, to: i64) -> i64
```

返回 [from, to) 范围内所有整数的累加和。

```link
sum(0, 5) == 10   // 0 + 1 + 2 + 3 + 4
sum(1, 101) == 5050
```

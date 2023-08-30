# Big O notation

1. `Big O notation` is a tool that describe the limiting behavior of a function when the argument tends towards a particular value or infinity.

2. `Big O notation` usually considers the `worst-case` scenario of an algorithm.(i.e. the longest amount of time an algorithm can possibly take to complete)

## Calculating Big O
1. Constants don't matter.

- constants vs variables, i.e. `f(n) = 3n`, 3 is a constant, n is a variable, therefore what is its Big O? The Big O is `O(n)`, because constants don't matter, so we can remove the 3.

2. Smaller terms don't matter.
- i.e. `f(n) = 2n^2 + 3n + 4`, the Big O is `O(n^2)`, because the smaller terms don't matter, so we can remove the `2`(because the **constant doesn't matter**) and `4`, what about `3n`? Compare to `2n^2`, `3n` is a smaller term, so we can remove it as well.

3. Logarithm Base doesn't matter.
- i.e. `f(n) = log2(n)`, the Big O is `O(log(n))`, because the logarithm base(`2`) doesn't matter, so we can remove the base.

### What is the Big O of f(n) = 5 ?

You might think the answer is `O(5)`, but it's actually `O(1)`, when we say the constant doesn't matter, it doesn't mean we delete it, it only means that we make it `1`, i.e. `f(n) = 3n` is actually `f(n) = 1n`, so the answer of `f(n) = 5` is `f(n) = 1`, which is `O(1)`.

## Common Big O of Algorithms
- `O(1)`
- `O(log(n))`
- `O(n)`
- `O(nlog(n))`
- `O(n^2)`
- `O(n^3)`

The above list is in order of **efficiency**, `O(1)` is the most efficient, `O(n^3)` is the least efficient.

### Why constant doest not matter?

Here is an example:[Google sheet](https://docs.google.com/spreadsheets/d/1G-y3lX_oJlBGxRSPI2bdazgyh14ETyQML9TkjRi8SyM/edit?usp=sharing)

Take a look at the `n` and `n+1500`, when the input size gets bigger, it doesn't make the extreme difference compare with `n^2`,therefore we can just ignore the constant.

In conclusion, the worst case scenario in this example is `O(n^2)`, 
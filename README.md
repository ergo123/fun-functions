# Functions are fun

## Prerequisites

NodeJS should be installed and added to PATH. To open configured repl run and to do exercise on your own run

```
node lambda.js
```

(it disables command previews which is annoying in this exercise)

All the function are already declared in `lambda-solved.js`

```
node lambda-solved.js
```

## Functions

### identity (idiot)

```javascript
I = a => a
```

Examples:

```javascript
I(1)
I(false)
I(I)
```

### mockingbird

```javascript
M = f => f(f)
```

Examples:

```javascript
M(I)
M(M)
```

### booleans

#### true

```javascript
T = a => b => a
```

#### false

```javascript
F = a => b => b
```

#### not

```javascript
NOT = b => b(F)(T)
```

Examples:

```javascript
NOT(T)
NOT(F)
```

#### and

```javascript
AND = a => b => a(b)(F)
```

Examples:

```javascript
AND(T)(T)
AND(F)(T)
AND(T)(F)
AND(F)(F)
```

#### or

```javascript
OR = a => b => a(T)(b)
```

Examples:

```javascript
OR(T)(T)
OR(F)(T)
OR(T)(F)
OR(F)(F)
```

#### equals (for booleans)

```javascript
BEQ = a => b => a(b)(b(F)(T))
// or
BEQ = a => b => a(b)(NOT(b))
```

Examples:

```javascript
BEQ(T)(F)
BEQ(F)(T)
BEQ(F)(F)
BEQ(T)(T)
```

### numbers

#### print a number

Prints a common representation of Church numerals.

```javascript
print = n => n(x => x + 1)(0)
```

#### 1, 2, 3, 4...

```javascript
n0 = f => a => a
n1 = f => a => f(a)
n2 = f => a => f(f(a))
n3 = f => a => f(f(f(a)))
n4 = f => a => f(f(f(f(a))))
```

Examples:

```javascript
print(n0)
print(n1)
print(n2)
print(n3)
print(n4)
```

#### successor

```javascript
succ = n => f => a => f(n(f)(a))
```

Examples:

```javascript
print(succ(n0))
print(succ(n1))
print(succ(n2))
print(succ(n3))
print(succ(n4))
print(succ(succ(n4)))
print(succ(succ(succ(n4))))
```

#### adding

```javascript
add = n => k => n(succ)(k)
```

Examples:

```javascript
print(add(n0)(n3))
print(add(n2)(n3))
print(add(n0)(n0))
```

#### multiplying

```javascript
mult = n => k => f => n(k(f))
// or
mult = n => k => n(add(k))(n0)
```

Examples:

```javascript
print(mult(n0)(n3))
print(mult(n2)(n3))
print(mult(n0)(n0))
```

#### power

```javascript
pow = n => k => k(n)
// or
pow = n => k => k(mult(n))(n1)
```

Examples:

```javascript
print(pow(n0)(n3))
print(pow(n2)(n3))
print(pow(n0)(n0))
```

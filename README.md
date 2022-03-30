# Functions are fun

## Prerequisites

NodeJS should be installed and added to PATH. To open configured repl run and to do exercise on your own run

```
node lambda.js
```

(it disables command previews which is annoying in this exercise)

All the function are already declared in `lambda-ready.js`

```
node lambda-ready.js
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
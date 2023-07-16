---
draft: false
layout: layouts/docsdoc.njk
title: Math Engine Vector Addition
date: 2023-07-13
---

# Math Engine: Vector Addition

## 2D

### Math:

#### Formulas:

$ a = (a1, a2) $
$ b = (b1, b2) $

$ c = a + b = (a1 + b1, a2 + b2) $

$ c = (x, y) $


#### Example:

$ c = a + b = (a1 + b1, a2 + b2) $

$ a = (4, 2) $
$ b = (3, 1) $

$ c = a + b = (4 + 3, 2 + 1) $

$ c = (7, 3) $


#### Pseudocode:

```python
Function VectorAdd(a, b)
   Declare c as Dictionary
   Set c['x'] to a['x'] + b['x']
   Set c['y'] to a['y'] + b['y']
   Display "The result of the vector addition is:", c
   Return c
End Function

# Example usage
Declare a as Dictionary with 'x' as 1 and 'y' as 2
Declare b as Dictionary with 'x' as 3 and 'y' as 4
Call VectorAdd(a, b)
```

#### Python Brief Example:

```python
def vector_add(a, b):
c = {'x': a['x'] + b['x'], 'y': a['y'] + b['y']}
print("The result of the vector addition is:", c)
return c

# example usage:
a = {'x': 1, 'y': 2}
b = {'x': 3, 'y': 4}
vector_add(a, b)
```

### C++ Engine Code:

```cpp
#include <iostream>

int main() {
    std::cout << "Test" << std::endl;
    return 0;
}
```


## 3D

### Math:

#### Formulas:

$ c = a + b = (a1 + b1, a2 + b2, a3 + b3) $

$ a = (a1, a2, a3) $
$ b = (b1, b2, b3) $


$ c = a + b = (a1 + b1, a2 + b2, a3 + b3) $

$ c = (x, y, z) $


#### Example:

$ c = a + b = (a1 + b1, a2 + b2, a3 + b3) $

$ a = (8, 12, 8) $
$ b = (10, 4, 9) $


$ c = a + b = (8 + 10, 12 + 4, 8 + 9) $

$ c = (18, 16, 17) $

#### Pseudocode:

```python
Function VectorAdd(a, b)
   Declare c as Dictionary
   Set c['x'] to a['x'] + b['x']
   Set c['y'] to a['y'] + b['y']
   Set c['z'] to a['z'] + b['z']
   Display "The result of the vector addition is:", c
   Return c
End Function

# Example usage
Declare a as Dictionary with 'x' as 1, 'y' as 2, and 'z' as 3
Declare b as Dictionary with 'x' as 4, 'y' as 5, and 'z' as 6
Call VectorAdd(a, b)

```

#### Python Brief Example:

```python
def vector_add(a, b):
    c = {'x': a['x'] + b['x'], 'y': a['y'] + b['y'], 'z': a['z'] + b['z']}
    print("The result of the vector addition is:", c)
    return c

# example usage:
a = {'x': 1, 'y': 2, 'z': 3}
b = {'x': 4, 'y': 5, 'z': 6}
vector_add(a, b)

```


### C++ Engine Code:

```cpp
#include <iostream>

int main() {
    std::cout << "Test" << std::endl;
    return 0;
}
```

## Overall Explanation:


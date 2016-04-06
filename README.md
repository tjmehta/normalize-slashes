# normalize-slashes
Normalize paths to by adding or removing beginning and/or end slashes.
Also, deduplicates extra slashes to a single slash and resolves `..` and `.`.

# Installation
```bash
npm i -g normalize-slashes
```

# Usage
```js
// remove start and end slashes by default
normalize('hello/world')            // 'hello/world'
normalize('/hello/world/')          // 'hello/world'
normalize('//hello//world//')       // 'hello/world'
normalize('/hello/../world/', opts) // 'world'

// normalize to have end slashes (remove start slashes)
var opts = {
  end: true
}
normalize('hello/world', opts)      // 'hello/world/' <- slash added
normalize('/hello/world/', opts)    // 'hello/world/'
normalize('//hello//world//', opts) // 'hello/world/'
normalize('/hello/../world/', opts) // 'world/'

// normalize to have start slashes (remove end slashes)
var opts = {
  start: true
}
normalize('hello/world', opts)      // '/hello/world' <- slash added
normalize('/hello/world/', opts)    // '/hello/world'
normalize('//hello//world//', opts) // '/hello/world'
normalize('/hello/../world/', opts) // '/world'

// normalize to have start and end slashes
var opts = {
  start: true,
  end: true
}
normalize('hello/world', opts)      // '/hello/world/' <- slashes added
normalize('/hello/world/', opts)    // '/hello/world/'
normalize('//hello//world//', opts) // '/hello/world/'
normalize('/hello/../world/', opts) // '/world/'
```

# License
MIT

---
title: SwiftUi Charts
layout: post
image: /public/flowlayout.png
category: swiftUi
---

At WWDC 2022 Apple released a new charts framework.
The framework is declarative and you can build all kinds of different charts.
Here are a couple of example to inspire you.

```swift
struct FlowLayout: Layout {
    struct Cache {
        var sizes: [CGSize]? = nil
        var positions: [CGPoint]? = nil
    }
}
```

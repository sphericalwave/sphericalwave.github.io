---
title: SwiftUi Charts
layout: post
image: /public/neo-bullets.jpeg
category: swiftUi
tags:
 - iOS
---

At WWDC 2022 Apple released a new charts framework.
The framework is declarative so you can build all kinds of different charts by composing different components.

Here's an example to illustrate how easy the framework is to work with.

```swift
import SwiftUI
import Charts

struct TopStyleChart: View {
    let data = [
        (name: "Cachapa", sales: 916),
        (name: "Injera", sales: 850),
        (name: "Crêpe", sales: 802),
        (name: "Jian Bing", sales: 753),
        (name: "Dosa", sales: 654),
        (name: "American", sales: 618)
    ]

    var body: some View {
        Chart(data, id: \.name) {
            BarMark(
                x: .value("Sales", $0.sales),
                y: .value("Name", $0.name)
            )
            // Set the foreground style of the bars.
            .foregroundStyle(.pink)
            // Customize the accessibility label and value.
            .accessibilityLabel($0.name)
            .accessibilityValue("\($0.sales) sold")
        }
    }
}
```

![image](/public/swift_chart_pink_horizontal_bars.png)

There's a lot more where that came from, you can start digging here.

[Hello Swift Charts](https://developer.apple.com/videos/play/wwdc2022/10136/)  
[Swift Charts: Raise the Bar](https://developer.apple.com/videos/play/wwdc2022/10137)  
[Design app experiences with charts](https://developer.apple.com/videos/play/wwdc2022/110342)

---
title: SwiftUi Custom Slider
layout: post
image: /public/neo-bullets.jpeg
category: swiftUi
tags:
 - iOS
---

Needed a custom slider for a crossfader in a project I was updating from UIKit
to swiftUi.  

Here it is.  
![image](/public/SwSlider.png)

```swift
import SwiftUI

struct SwCrossFader: View {

    @Binding var percentage: Float

    var body: some View {
        GeometryReader { geometry in

            ZStack(alignment: .leading) {

                ZStack(alignment: .leading) {
                    Rectangle()
                        .foregroundColor(.gray)
                        .frame(height: geometry.size.height * 0.6)

                    Rectangle()
                        .foregroundColor(.accentColor)
                        .frame(width: geometry.size.width * CGFloat(self.percentage), height: geometry.size.height * 0.6)
                }
                .cornerRadius(4)

                Rectangle()
                    .frame(width: 16)
                    .offset(x: geometry.size.width * CGFloat(self.percentage))
            }
            .gesture(DragGesture(minimumDistance: 0)
                .onChanged({ value in
                    self.percentage = min(max(0, Float(value.location.x / geometry.size.width)), 100)
                }))
        }
    }
}
```

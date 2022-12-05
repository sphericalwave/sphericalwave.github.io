---
title: SwiftUi Custom Slider
layout: post
image: /public/flowlayout.png
category: swiftUi
---

Needed a custom slider for a crossfader in a project I was updating from UIKit
to swiftUi. Here it is.

```swift
struct SwSlider: View {

    @Binding var percentage: Float

    var body: some View {
        GeometryReader { geometry in
            ZStack(alignment: .leading) {
                Rectangle()
                    .foregroundColor(.gray)

                Rectangle()
                    .foregroundColor(.accentColor)
                    .frame(width: geometry.size.width * CGFloat(self.percentage / 100))

                Rectangle()
                    .frame(width: 15)
                    .offset(x: geometry.size.width * CGFloat(self.percentage / 100))
            }
            .cornerRadius(4)
            .gesture(DragGesture(minimumDistance: 0)
                .onChanged({ value in
                    self.percentage = min(max(0, Float(value.location.x / geometry.size.width * 100)), 100)
                }))
        }
    }
}
```

//TODO: include an image of the output

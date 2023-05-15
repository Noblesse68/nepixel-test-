let strip = neopixel.create(DigitalPin.P13, 4, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
strip.show()
basic.forever(function () {
    basic.pause(100)
    strip.rotate(1)
    strip.show()
})

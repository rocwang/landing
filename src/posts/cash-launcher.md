---
title: Cash Launcher
date: 2021-01-20
---

<Youtube id="qdm6b15lcD4">
</Youtube>

In the last a few months, I built a "make it rain" device that is controlled by
mobile.

Source Code: [Client](https://github.com/rocwang/cash-launcher),
[Server](https://github.com/rocwang/cash-launcher-server)

## The Client

[Live Demo][live demo]

The client is a web app running on a user's mobile to control the custom-built
cash launcher.

This app connects to the server running in the Raspberry Pi that is
installed inside cash launcher. It uses WebSocket to transmit controlling data
like device orientation and swipe speed to the server in real-time. The server
uses such data to control the physical Cash Launcher, e.g. panning, tilting and
enabling the motor.

The app comes with 2 pages:

* Menu: provide a list of banknotes for users to choose.
* Stack: render the selected banknote as a stack of money. Users swipe up to
  dispense the banknote.

The app is built with Vue 3. Routing is handled by vue-router. To achieve the
best performance on mobile, the rendering of banknote stacks is built
with [konva][konva], an HTML 2d canvas library. rxjs is used to help pipe data
from user actions and device orientation events to WebSockets.

## The Server

The server is an HTTPS + WebSocket server that transforms the controlling data
from the web client to operate the cash launcher from Raspberry Pi.

It uses the [ws][ws] library to accept WebSocket connections from the client. It
has 2 endpoints: `/orientation` and `/velocity`. It transforms the device
orientation and swiping velocity sent from the client to [PWM][pwm] signals and
enabling signals, which are used to control the 2 servos and 1 motor connected
to Raspberry Pi. The low-level GPIO operations are handled by the [rpio][rpio]
package. rxjs is also used to help with the data transformation.

As the server is secured using HTTPS, a pair of key and certifications files
namely `key.pem` and `crt.pem` need to be put under the project root before
running the server.

The server also provides an HTTPS endpoint `/siri`. When called. it makes the
motor on the cash launcher to work for 500ms.

[ws]: https://www.npmjs.com/package/ws
[pwm]: https://en.wikipedia.org/wiki/Pulse-width_modulation
[rpio]: https://www.npmjs.com/package/rpio
[video demo]: https://www.youtube.com/watch?v=qdm6b15lcD4
[live demo]: https://cash.kiwiberry.nz/
[conf]: https://vitejs.dev/config/
[konva]: https://github.com/konvajs/konva
[design]: design/design.sketch
[specimens]: design

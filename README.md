> ❗ Work in progress

Is it an another GamepadAPI helper library? Not quite...

Goal of this library - ease adapting web interfaces for gamepad input. Approach suggested:

- In declarative way Split UI for Input Layers and Input Focus Zones
- Threat gamepad input events as any other input event, relying on DOM event bubbling

In particular:

Input Layer:

- is responsible for emitting (if that Layer is active) and listening for custom gamepad input events
- receives actual gamepad input state
- normalizes axis via deadzones, additionally threat them as buttons
- provides low-level subscription "onGamepadInput", notify subscribers with raw and normalized version of gamepad state (consumable for game logic)
- provides hight-level subscribtions ("onGamepadButtonDown", "onGamepadButtonPressed", "onGamepadButtonUp", "onGamepadAxisChange") (consumable for ui)
- stop custom gamepad input events propagation if necessary

Input Focus Zone:

- is responsible for fast traversing around the page
- (if zIndex provided) "detaches" any Input Layers which are not nested in the top Focus Zone (usefull while dealing with modal dialogs and overlapping menus). Exception: Input Layers who recives gamepad input in "force mode".



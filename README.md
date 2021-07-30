<h2 align='center'><samp>Toggle Dark Mode</samp></h2>

<p align='center'>Easily toggle between light and dark mode in Sublime Text 4</p>

<p align='center'>
  <a href='https://www.sublimetext.com'>
    <img src='https://img.shields.io/badge/ST-Build%204096+-orange.svg?style=flat-square&logo=sublime-text' alt="Required Version">
  </a>
  <a href='https://packagecontrol.io/packages/Toggle%20Dark%20Mode'>
    <img src='https://img.shields.io/packagecontrol/dt/Toggle%20Dark%20Mode.svg?style=flat-square' alt="Downloads Package Control">
  </a>
  <a href='https://github.com/ElMassimo/sublime-toggle-dark-mode/tags'>
    <img src='https://img.shields.io/github/tag/ElMassimo/sublime-toggle-dark-mode.svg?style=flat-square&logo=github' alt="Latest tag">
  </a>
  <a href='https://github.com/ElMassimo/vite_ruby/blob/main/LICENSE.txt'>
    <img src='https://img.shields.io/badge/license-MIT-blue.svg' alt="License">
  </a>
</p>

[Sublime Text 4]: https://www.sublimetext.com/
[Package Control]: https://packagecontrol.io/installation
[package]: https://packagecontrol.io/packages/Toggle%20Dark%20Mode

The [_Toggle Dark Mode_][package] plugin for [Sublime Text 4] allows you to
toggle dark mode independently from the system preferences, according to your
light and dark theme and color scheme preferences.

It uses the `auto` theme and color scheme feature in Sublime Text 4, so it works
out of the box without any configuration, and following your preferences.

## Installation 💿

* Open the Command Palette (`Tools > Command Palette`).
* Choose `Package Control: Install Package`.
* Search for [_Toggle Dark Mode_][package] and select to install.

## Usage 🌚🌞

The plugin adds a command to toggle between your preferred light and dark theme
and color scheme.

There are two ways to use the command:

- Open the command palette, and run _Toggle Dark Mode_
- Add a key binding in `Preferences > Key Bindings`:

  ```js
  [ 
    // for example, on Mac:
    { "keys": ["ctrl+super+t"], "command": "toggle_dark_mode" },
    // or
    { "keys": ["ctrl+shift+t"], "command": "toggle_dark_mode" },
  ]
  ```

### Auto-Switching 🤖

When toggling back to the current OS preference, it will switch `theme` and `color_scheme`
back to `auto`, to leverage the auto-switching capability built-in in Sublime Text 4.

### Configuration ⚙️

_Sublime Text 4_ introduces the following settings to work in combination with `auto`:

- `dark_color_scheme`
- `dark_theme`
- `light_color_scheme`
- `light_theme`

You may configure these in your `Preferences.sublime-settings`, and they will be
honored by this plugin.

## Requirements 📦

_Toggle Dark Mode_ is tested against the **latest Build** of Sublime Text, currently requiring **`Build 4096+`**, which provides the new [`ui_info` API](https://www.sublimetext.com/docs/api_reference.html#sublime:ver-dev) allowing this plugin to have no dependencies.

* [Sublime Text 4]
* [Package Control]

import sublime
import sublime_plugin

class ToggleDarkModeCommand(sublime_plugin.TextCommand):
  def run(self, edit, **args):
    try:
      ui_info = sublime.ui_info()
      current_theme = ui_info.get("theme").get("value")
      current_color_scheme = ui_info.get("color_scheme").get("value")
      prefer_light = ui_info.get("system").get("style") == 'light'
    except KeyError:
      current_theme = "auto"
      prefer_light = False

    settings = sublime.load_settings("Preferences.sublime-settings")

    # Light theme and dark theme might have the same name, use color scheme to get current state:
    if settings.get("light_theme") == settings.get("dark_theme"):
      is_light = (current_theme == "auto" and prefer_light) or current_color_scheme == settings.get("light_color_scheme")
    else:
      is_light = (current_theme == "auto" and prefer_light) or current_theme == settings.get("light_theme")
    
    self._set_dark_mode(settings, not is_light, prefer_light)

  def _set_dark_mode(self, settings, is_light, prefer_light):
    if is_light == prefer_light:
      theme = "auto"
      color_scheme = "auto"
    else:
      value = "light" if is_light else "dark"
      theme = settings.get('%s_theme' % value)
      color_scheme = settings.get('%s_color_scheme' % value)

    settings.set("theme", theme)
    settings.set("color_scheme", color_scheme)

    sublime.save_settings("Preferences.sublime-settings")

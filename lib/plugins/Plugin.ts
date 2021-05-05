export default class Plugin {
  /**
   * Plugin system for
   * @param name - Name of plugin (Must be unique)
   * @param args - Any args needed by the plugin
   */
  constructor(name: string, ...args: any) {}

  /**
   * Load during initialization of the library
   */
  onLoad() {}
}

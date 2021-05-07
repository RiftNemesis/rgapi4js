export default class Plugin {
  private name: string;
  private args: any;

  /**
   * Plugin system for
   * @param name - Name of plugin (Must be unique)
   * @param args - Any args needed by the plugin
   */
  constructor(name: string, ...args: any) {
    this.name = name;
    this.args = args;
  }

  /**
   * Load during initialization of the library
   */
  onLoad() {}
}

// tslint:disable: no-console
class Logger {
  log = (key: string, value: any) => console.log(key, value);
}

export default new Logger();

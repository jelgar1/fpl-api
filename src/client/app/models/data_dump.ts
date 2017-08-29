export class DataDump {
  players: object[];

  static fromJSON(obj: any): DataDump {
    return Object.assign(Object.create(DataDump.prototype), obj, {});
  }
}

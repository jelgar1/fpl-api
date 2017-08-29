import { Player } from './player';

export class DataDump {
  players: object[];

  static fromJSON(obj: any): DataDump {
    let newObject = Object.assign(Object.create(DataDump.prototype), obj, {});
    if (newObject['elements']) newObject['elements'] = (newObject['elements'] || []).map((raw: any) => Player.fromJSON(raw));
    return newObject;
  }
}

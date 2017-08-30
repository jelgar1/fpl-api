import { Player } from './player';

export class AllStats {
  elements: Array<Player>;

  static fromJSON(obj: any): AllStats {
    let newObject = Object.assign(Object.create(AllStats.prototype), obj, {});
    if (newObject['elements']) newObject['elements'] = (newObject['elements'] || []).map((raw: any) => Player.fromJSON(raw));
    return newObject;
  }
}

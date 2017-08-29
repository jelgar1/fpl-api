export class Player {
  id: number;
  web_name: string;
  goals: number;

  static fromJSON(obj: any): Player {
    return Object.assign(Object.create(Player.prototype), obj, {});
  }
}

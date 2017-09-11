export class Team {
  id: number;
  playerIds: object[];

  static fromJSON(obj: any): Team {
    return Object.assign(Object.create(Team.prototype), obj, {});
  }
}

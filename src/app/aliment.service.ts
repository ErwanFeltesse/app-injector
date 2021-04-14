export class AlimentService {
  public aliments: string[] = [];
  public addOne(aliment: string): void {
    this.aliments.push(aliment);
  }
  public removeOne(index: number): void {
    this.aliments.splice(index, 1);
  }
}

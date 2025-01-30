import { MitreTechnique, MitreTactic } from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
}
export interface IRepository {
  getBaselineTechniques(): Promise<MitreTechnique[]>;
}
export interface IRepository {
  getTechniquesMatrixTrending(): Promise<MitreTechnique[]>;
}

import { TrendingTechnique, MitreTactic } from "../components/Data";

export interface IRepository {
  getTactics(): Promise<MitreTactic[]>;
}
export interface IRepository {
  getBaselineTechniques(): Promise<TrendingTechnique[]>;
}
export interface IRepository {
  getTrendingTechniques(): Promise<TrendingTechnique[]>;
}

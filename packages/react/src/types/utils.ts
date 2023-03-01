export type LeftJoin<Left, Right> = Left & Omit<Right, keyof Left>;

export type RightJoin<Left, Right> = Right & Omit<Left, keyof Right>;

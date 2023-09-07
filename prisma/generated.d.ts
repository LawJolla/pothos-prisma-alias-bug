/* eslint-disable */
import type { Prisma, Account, Value, Score, Date } from "./client";
export default interface PrismaTypes {
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: Prisma.AccountCreateInput;
        Update: Prisma.AccountUpdateInput;
        RelationName: "values";
        ListRelations: "values";
        Relations: {
            values: {
                Shape: Value[];
                Name: "Value";
            };
        };
    };
    Value: {
        Name: "Value";
        Shape: Value;
        Include: Prisma.ValueInclude;
        Select: Prisma.ValueSelect;
        OrderBy: Prisma.ValueOrderByWithRelationInput;
        WhereUnique: Prisma.ValueWhereUniqueInput;
        Where: Prisma.ValueWhereInput;
        Create: Prisma.ValueCreateInput;
        Update: Prisma.ValueUpdateInput;
        RelationName: "account" | "scores";
        ListRelations: "scores";
        Relations: {
            account: {
                Shape: Account;
                Name: "Account";
            };
            scores: {
                Shape: Score[];
                Name: "Score";
            };
        };
    };
    Score: {
        Name: "Score";
        Shape: Score;
        Include: Prisma.ScoreInclude;
        Select: Prisma.ScoreSelect;
        OrderBy: Prisma.ScoreOrderByWithRelationInput;
        WhereUnique: Prisma.ScoreWhereUniqueInput;
        Where: Prisma.ScoreWhereInput;
        Create: Prisma.ScoreCreateInput;
        Update: Prisma.ScoreUpdateInput;
        RelationName: "value";
        ListRelations: never;
        Relations: {
            value: {
                Shape: Value;
                Name: "Value";
            };
        };
    };
    Date: {
        Name: "Date";
        Shape: Date;
        Include: never;
        Select: Prisma.DateSelect;
        OrderBy: Prisma.DateOrderByWithRelationInput;
        WhereUnique: Prisma.DateWhereUniqueInput;
        Where: Prisma.DateWhereInput;
        Create: Prisma.DateCreateInput;
        Update: Prisma.DateUpdateInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}
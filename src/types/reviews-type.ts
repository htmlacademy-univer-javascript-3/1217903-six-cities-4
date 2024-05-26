import { UserType } from './uder-type';

export type ReviewType = {
    id: string;
    date: string;
    user: UserType;
    comment: string;
    rating: number;
};

export type ReviewData = {
    id: string | undefined;
    comment: string;
    rating: number | null;
};

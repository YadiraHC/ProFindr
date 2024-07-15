// src/utils/numberUtils.ts
export const formatNumberWithCommas = (number: number): string => {
    return new Intl.NumberFormat('en-US').format(number);
};

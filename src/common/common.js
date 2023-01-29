export const KEYS = [
    '111',
    '110',
    '101',
    '100',
    '011',
    '010',
    '001',
    '000',
];

export const caluculateRule = ruleNumber => KEYS.reduce((acc, k, i) => (
    {
        ...acc,
        [k]: ruleNumber[i],
    }
), {});

export const convertToPaddedBinaryString = (rule, pad = 8) => (rule >>> 0).toString(2).padStart(pad, '0');

import validator from "validator";
import { accountTypes } from "./validation.model";

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban);

export const isPositiveNumber = (amount: number): boolean => {
    return amount > 0;
}

export const isDateAfterToday = (date: string) => new Date(date) > new Date();
export const isEmailWellFormed = (email: string) => validator.isEmail(email);
export const isStringValueInformed = (field: string) : boolean => field !== "";

export const isValueNotNullOrUndefined = <T>(value: T): boolean => {
    return value !== null && value !== undefined;
};

export const isAccountTypeCorrect = (value: string): boolean => {
    return accountTypes.includes(value);
};
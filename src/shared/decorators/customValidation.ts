import {
  registerDecorator,
  ValidationOptions,
  buildMessage,
} from "class-validator";
import i18n from "src/config/i18n";

/**
 * Checks if a given value is not empty string when it's trimmed.
 */
export function isNotEmptyString(value: unknown): boolean {
  return typeof value === "string" && value.trim() !== "";
}

/**
 * Checks if a given value is not empty string when it's trimmed.
 */
export function IsNotEmptyString(validationOptions?: ValidationOptions) {
  return function(object: unknown, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: {
        validate: (value): boolean => isNotEmptyString(value),
        defaultMessage: buildMessage(
          eachPrefix =>
            eachPrefix +
            i18n.__("validation.emptyStringError", { input: "$property" }),
          // eachPrefix + "$property should not be empty string",
          validationOptions,
        ),
      },
    });
  };
}

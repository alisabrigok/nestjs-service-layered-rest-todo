import {
  registerDecorator,
  ValidationOptions,
  buildMessage,
} from "class-validator";

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
          eachPrefix => eachPrefix + "$property should not be empty string",
          validationOptions,
        ),
      },
    });
  };
}

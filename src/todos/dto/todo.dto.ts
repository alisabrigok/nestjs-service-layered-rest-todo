import { IsString, IsBoolean, IsOptional } from "class-validator";
import { IsNotEmptyString } from "src/shared/decorators/customValidation";

export class CreateTodoDto {
  @IsNotEmptyString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}

import { Injectable } from "@nestjs/common";
import { SuccessDto } from "../dto/success.dto";

@Injectable()
export class MessageService {
  success(message?: string): SuccessDto {
    return { success: true, message };
  }
}

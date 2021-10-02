import { CreateCommetInput } from './create-commet.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCommetInput extends PartialType(CreateCommetInput) {
  id: number;
}

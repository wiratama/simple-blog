import { CreateNavigationInput } from './create-navigation.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateNavigationInput extends PartialType(CreateNavigationInput) {
  id: number;
}

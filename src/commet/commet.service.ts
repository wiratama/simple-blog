import { Injectable } from '@nestjs/common';
import { CreateCommetInput } from './dto/create-commet.input';
import { UpdateCommetInput } from './dto/update-commet.input';

@Injectable()
export class CommetService {
  create(createCommetInput: CreateCommetInput) {
    return 'This action adds a new commet';
  }

  findAll() {
    return `This action returns all commet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commet`;
  }

  update(id: number, updateCommetInput: UpdateCommetInput) {
    return `This action updates a #${id} commet`;
  }

  remove(id: number) {
    return `This action removes a #${id} commet`;
  }
}

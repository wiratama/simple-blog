import { Injectable } from '@nestjs/common';
import { CreateNavigationInput } from './dto/create-navigation.input';
import { UpdateNavigationInput } from './dto/update-navigation.input';

@Injectable()
export class NavigationService {
  create(createNavigationInput: CreateNavigationInput) {
    return 'This action adds a new navigation';
  }

  findAll() {
    return `This action returns all navigation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} navigation`;
  }

  update(id: number, updateNavigationInput: UpdateNavigationInput) {
    return `This action updates a #${id} navigation`;
  }

  remove(id: number) {
    return `This action removes a #${id} navigation`;
  }
}

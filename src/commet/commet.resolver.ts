import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommetService } from './commet.service';
import { CreateCommetInput } from './dto/create-commet.input';
import { UpdateCommetInput } from './dto/update-commet.input';

@Resolver('Commet')
export class CommetResolver {
  constructor(private readonly commetService: CommetService) {}

  @Mutation('createCommet')
  create(@Args('createCommetInput') createCommetInput: CreateCommetInput) {
    return this.commetService.create(createCommetInput);
  }

  @Query('commet')
  findAll() {
    return this.commetService.findAll();
  }

  @Query('commet')
  findOne(@Args('id') id: number) {
    return this.commetService.findOne(id);
  }

  @Mutation('updateCommet')
  update(@Args('updateCommetInput') updateCommetInput: UpdateCommetInput) {
    return this.commetService.update(updateCommetInput.id, updateCommetInput);
  }

  @Mutation('removeCommet')
  remove(@Args('id') id: number) {
    return this.commetService.remove(id);
  }
}

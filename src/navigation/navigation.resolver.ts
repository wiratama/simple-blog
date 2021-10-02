import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NavigationService } from './navigation.service';
import { CreateNavigationInput } from './dto/create-navigation.input';
import { UpdateNavigationInput } from './dto/update-navigation.input';

@Resolver('Navigation')
export class NavigationResolver {
  constructor(private readonly navigationService: NavigationService) {}

  @Mutation('createNavigation')
  create(@Args('createNavigationInput') createNavigationInput: CreateNavigationInput) {
    return this.navigationService.create(createNavigationInput);
  }

  @Query('navigation')
  findAll() {
    return this.navigationService.findAll();
  }

  @Query('navigation')
  findOne(@Args('id') id: number) {
    return this.navigationService.findOne(id);
  }

  @Mutation('updateNavigation')
  update(@Args('updateNavigationInput') updateNavigationInput: UpdateNavigationInput) {
    return this.navigationService.update(updateNavigationInput.id, updateNavigationInput);
  }

  @Mutation('removeNavigation')
  remove(@Args('id') id: number) {
    return this.navigationService.remove(id);
  }
}

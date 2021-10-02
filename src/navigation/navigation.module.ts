import { Module } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { NavigationResolver } from './navigation.resolver';

@Module({
  providers: [NavigationResolver, NavigationService]
})
export class NavigationModule {}

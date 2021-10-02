import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SettingService } from './setting.service';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';

@Resolver('Setting')
export class SettingResolver {
  constructor(private readonly settingService: SettingService) {}

  @Mutation('createSetting')
  create(@Args('createSettingInput') createSettingInput: CreateSettingInput) {
    return this.settingService.create(createSettingInput);
  }

  @Query('setting')
  findAll() {
    return this.settingService.findAll();
  }

  @Query('setting')
  findOne(@Args('id') id: number) {
    return this.settingService.findOne(id);
  }

  @Mutation('updateSetting')
  update(@Args('updateSettingInput') updateSettingInput: UpdateSettingInput) {
    return this.settingService.update(updateSettingInput.id, updateSettingInput);
  }

  @Mutation('removeSetting')
  remove(@Args('id') id: number) {
    return this.settingService.remove(id);
  }
}

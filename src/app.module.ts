import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostTypeModule } from './post-type/post-type.module';
import { CategoryModule } from './category/category.module';
import { TagsModule } from './tags/tags.module';
import { CommetModule } from './commet/commet.module';
import { SettingModule } from './setting/setting.module';
import { NavigationModule } from './navigation/navigation.module';

@Module({
  imports: [PostModule, AuthModule, UsersModule, PostTypeModule, CategoryModule, TagsModule, CommetModule, SettingModule, NavigationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

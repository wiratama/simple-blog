import { Module } from '@nestjs/common';
import { PostTypeService } from './post-type.service';
import { PostTypeController } from './post-type.controller';

@Module({
  controllers: [PostTypeController],
  providers: [PostTypeService]
})
export class PostTypeModule {}

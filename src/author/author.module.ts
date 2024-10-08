import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthorService } from './author.service';

@Module({
  imports: [DatabaseModule],
  providers: [AuthorService],
})
export class AuthorModule {}

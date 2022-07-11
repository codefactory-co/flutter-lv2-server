import { PartialType } from '@nestjs/mapped-types';
import { CreateRatingDto } from './create-rating.dto';

export class UpdateRatingDto extends PartialType(CreateRatingDto) {}

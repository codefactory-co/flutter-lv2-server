import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  // @UseGuards(AccessTokenGuard)
  // @Get()
  // paginateRatings(@Param() paginationDto: PaginationDto) {
  //   return this.ratingService.paginateRatings(paginationDto);
  // }
  //
  // @UseGuards(AccessTokenGuard)
  // @Post()
  // postRating(@Request() req, @Body() body: CreateRatingDto) {
  //   return this.ratingService.createRestaurantRating(req.user, body);
  // }
}

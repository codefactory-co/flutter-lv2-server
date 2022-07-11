import { Injectable } from '@nestjs/common';
import { BaseEntity } from './entity/base.entity';
import { PaginationDto } from './dto/pagination.dto';
import { Pagination } from './entity/pagination.entity';

@Injectable()
export class CoreService {
  paginate<T extends BaseEntity>(
    items: T[],
    paginationDto: PaginationDto,
  ): Pagination<T> {
    const copyItems = [...items];
    const startIdx = paginationDto.after
      ? copyItems.findIndex((item) => item.id === paginationDto.after)
      : 0;

    const plusOneData = copyItems.splice(
      startIdx === 0 ? startIdx : startIdx + 1,
      paginationDto.count + 1,
    );
    const hasMore = plusOneData.length > paginationDto.count;

    const data = hasMore
      ? plusOneData.splice(0, paginationDto.count)
      : plusOneData;

    return {
      meta: {
        count: data.length,
        hasMore,
      },
      data,
    };
  }
}

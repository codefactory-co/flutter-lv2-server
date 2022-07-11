import { RestaurantPriceRange } from '../restaurant/entities/restaurant.entity';
import { IRestaurantRaw } from './restaurant.data.interface';

export const restaurants: IRestaurantRaw[] = [
  {
    name: '불타는 떡볶이',
    thumbUrl: '떡볶이/떡볶이.jpg',
    tags: ['떡볶이', '치즈', '매운맛'],
    detail: `!!!리뷰 EVENT & 비조리 EVENT 진행중!!!
    
@ 기본적으로 매콤합니다 @
@ 덜맵게 가능하니 요청사항에 적어주세요 @
@ 1인분 배달 가능합니다 @`,
    priceRange: RestaurantPriceRange.medium,
    deliveryTime: 15,
    deliveryFee: 2000,
  },
  {
    name: '매콤 멕시칸',
    thumbUrl: '멕시칸/야채타코.jpg',
    tags: ['멕시칸', '매콤', '할라피뇨'],
    detail: `고객님의 많은 관심에 힘입어 저녁 12시까지 영업합니다! 앞으로도 많이 찾아주세요 :)
    
항상 고객님의 안전한 먹거리를 위해 위생에 각별히 신경쓰고 있습니다. 안심하시고 맛있는 요리를 즐겨주세요!
    
언제든지 요청사항에 원하시는 내용을 적어주시면 최대한 맞춰 조리해드리니 부담없이 요청사항에 기재해주세요!`,
    priceRange: RestaurantPriceRange.expensive,
    deliveryTime: 30,
    deliveryFee: 0,
  },
  {
    name: '엄마손 볶음밥',
    thumbUrl: '볶음밥/새우볶음밥.jpg',
    tags: ['분식', '볶음밥', '김치'],
    detail: `***리뷰 이벤트 진행중***
1) 엄마손 볶음밥 찜하기!
2) 음식 사진과 5개 리뷰 작성 악속하기!
3) 요청사항에 '리뷰이벤트 참여' 적기!`,
    priceRange: RestaurantPriceRange.cheap,
    deliveryTime: 20,
    deliveryFee: 3000,
  },
  {
    name: '신선 코팩 스시',
    thumbUrl: '스시/중간모듬스시.jpg',
    tags: ['스시', '일식', '연어'],
    detail: `영업시간 변경 오후 9시 ~ 익일 점심 1시까지!
    
사진리뷰 & 찜 해주시면 '콜라 500ml' 서비스!
1. 사진올리기 리뷰약속!
2. 찜하기 누르기!
3. 맛있게 드시고 사진과 리뷰 꼭 부탁드려요~~`,
    priceRange: RestaurantPriceRange.expensive,
    deliveryTime: 30,
    deliveryFee: 0,
  },
  {
    name: '사나이 대왕 스테이크',
    thumbUrl: '스테이크/등심스테이크.jpg',
    tags: ['스테이크', '양식', '빠른배송'],
    detail: `요청사항에 '리뷰작성' | '리뷰' 남겨주시면 따근한 치즈스틱을 보내 드립니다!!!
    
메뉴권과 디지털 금액권 선물 바등신 고객님은 아웃백 어플에서 이제 주문이 가능합니다. 딜리버리 주문하기에서 메뉴주문 하신 후 결제하실때 메뉴권, 디지털 금액권 체크하고 선물받으신 바코드 번호 입력하시면 결제가 됩니다~ 참고해주세요!!
    
사나이 대왕 스테이크는 모든 음식을 전자레인지에 1분 데워 드시면 더더더더더욱 맛있게 드실 수 있습니다!`,
    priceRange: RestaurantPriceRange.expensive,
    deliveryTime: 10,
    deliveryFee: 0,
  },
  {
    name: '현지맛 미미 쌀국수',
    thumbUrl: '쌀국수/보통쌀국수.jpg',
    tags: ['쌀국수', '베트남', '해장요리'],
    detail: `쌀국수소스 한통에 칠리소스2 해선장소스1 비율로 드려요~
    
**쌀국수 주문시
칠리&해선장 2대1비율, 양파절임, 단무지, 레몬조각1개
    
**솔직한 후기 event~ing
후기를 작성해주시면 콜라 500ml를 드려요~
    
**19주류 병맥주 주문시 오프너증정, 신분증 필히지참
    
**배달안내
예상시간은 최대예상으로 보내드립니다
비, 눈 오는날은 지연될 수 있습니다.
배달대행을 사용하고 있으므로, 주소 잘못 입력시 배달료가 추가됩니다.`,
    priceRange: RestaurantPriceRange.cheap,
    deliveryTime: 25,
    deliveryFee: 1000,
  },
  {
    name: '불타는 냠냠 치킨',
    thumbUrl: '치킨/오븐치킨.jpg',
    tags: ['치킨', '치맥', '무료배송'],
    detail: `1회용품 줄이기 일환으로 젓가락은 기본 제공되지 않습니다.
필요하신분은 요청사항에 요청해주세요~!

반마리 메뉴에는 소스, 콜라가 기본 제공되지 않습니다
리뷰 이벤트 #리뷰감자 #리뷰소스 ((택1))

1,000원 2,000원 4,000원 할인쿠폰
방문포장시 대폭할인!`,
    priceRange: RestaurantPriceRange.medium,
    deliveryTime: 30,
    deliveryFee: 0,
  },
  {
    name: '크리미 꾸덕 파스타',
    thumbUrl: '파스타/까르보나라.jpg',
    tags: ['파스타', '이탈리안', '데이트'],
    detail: `저희 매장은 크림 파스타의 경우 비밀 레시피로 만든 특유의 크림 가루를 사용하여 조리하고있습니다. 보통 크림파스타 색이 아니더라도 믿고 안심하고 드셔도 됩니다.
    
알리오 올리오 메뉴 같은 경우는 조리시 기본으로 페페론치노가 첨가되어 다소 매콤할 수 있습니다.`,
    priceRange: RestaurantPriceRange.medium,
    deliveryTime: 15,
    deliveryFee: 0,
  },
];

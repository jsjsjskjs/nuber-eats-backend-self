import { Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./entites/restaurant.entity";

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(returns => Restaurant)
  myRestaurant() {
    return {
      name: 'sik'
    }
  }
}
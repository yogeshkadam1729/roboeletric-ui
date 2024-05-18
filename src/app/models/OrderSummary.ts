import { Devices } from "./Devices";
import { Shops } from "./Shops";

export interface OrderSummary {
    devices:Devices[];
    shop:Shops
}
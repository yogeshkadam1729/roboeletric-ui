import { Devices } from "./Devices";
import { Shops } from "./Shops";

export interface ServiceCatalouge {
    devices:Set<Devices>;
    shop:Shops;
    
}
import { VNifV2EntvNifV2Ent } from "../definitions/VNifV2EntvNifV2Ent";
import { VNifV2SalvNifV2Sal } from "../definitions/VNifV2SalvNifV2Sal";

export interface VNifPort1 {
    VNifV2(vNifV2Ent: VNifV2EntvNifV2Ent, callback: (err: any, result: VNifV2SalvNifV2Sal, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}

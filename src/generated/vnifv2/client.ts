import { Client as SoapClient, createClientAsync as soapCreateClientAsync, IExOptions as ISoapExOptions } from "soap";
import { VNifV2EntvNifV2Ent } from "./definitions/VNifV2EntvNifV2Ent";
import { VNifV2SalvNifV2Sal } from "./definitions/VNifV2SalvNifV2Sal";
import { VNifV2Service } from "./services/VNifV2Service";

export interface VNifV2Client extends SoapClient {
    VNifV2Service: VNifV2Service;
    VNifV2Async(vNifV2Ent: VNifV2EntvNifV2Ent, options?: ISoapExOptions): Promise<[result: VNifV2SalvNifV2Sal, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create VNifV2Client */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<VNifV2Client> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}

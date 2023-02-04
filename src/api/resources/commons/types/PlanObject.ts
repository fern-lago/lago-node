/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

export interface PlanObject {
    lagoId?: string;
    name?: string;
    createdAt?: string;
    code?: string;
    interval?: LagoApi.PlanInterval;
    description?: string;
    amountCents?: number;
    amountCurrency?: string;
    trialPeriod?: number;
    payInAdvance?: boolean;
    billChargesMonthly?: boolean;
    charges?: LagoApi.ChargeObject[];
}

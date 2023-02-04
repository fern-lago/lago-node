/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

export interface InvoiceObject {
    lagoId?: string;
    sequentialId?: number;
    number?: string;
    issuingDate?: string;
    invoiceType?: LagoApi.InvoiceType;
    status?: LagoApi.InvoiceStatus;
    paymentStatus?: LagoApi.PaymentStatus;
    amountCents?: number;
    amountCurrency?: string;
    vatAmountCents?: number;
    vatAmountCurrency?: string;
    creditAmountCents?: number;
    creditAmountCurrency?: string;
    totalAmountCents?: number;
    totalAmountCurrency?: string;
    legacy?: boolean;
    fileUrl?: string;
    customer?: LagoApi.CustomerObject;
    subscriptions?: LagoApi.SubscriptionObject[];
    fees?: LagoApi.FeeObject[];
    credits?: LagoApi.CreditObject[];
}

/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const InvoiceObject: core.serialization.ObjectSchema<serializers.InvoiceObject.Raw, LagoApi.InvoiceObject> =
    core.serialization.object({
        lagoId: core.serialization.property("lago_id", core.serialization.string().optional()),
        sequentialId: core.serialization.property("sequential_id", core.serialization.number().optional()),
        number: core.serialization.string().optional(),
        issuingDate: core.serialization.property("issuing_date", core.serialization.string().optional()),
        invoiceType: core.serialization.property(
            "invoice_type",
            core.serialization.lazy(async () => (await import("../../..")).InvoiceType).optional()
        ),
        status: core.serialization.lazy(async () => (await import("../../..")).InvoiceStatus).optional(),
        paymentStatus: core.serialization.property(
            "payment_status",
            core.serialization.lazy(async () => (await import("../../..")).PaymentStatus).optional()
        ),
        amountCents: core.serialization.property("amount_cents", core.serialization.number().optional()),
        amountCurrency: core.serialization.property("amount_currency", core.serialization.string().optional()),
        vatAmountCents: core.serialization.property("vat_amount_cents", core.serialization.number().optional()),
        vatAmountCurrency: core.serialization.property("vat_amount_currency", core.serialization.string().optional()),
        creditAmountCents: core.serialization.property("credit_amount_cents", core.serialization.number().optional()),
        creditAmountCurrency: core.serialization.property(
            "credit_amount_currency",
            core.serialization.string().optional()
        ),
        totalAmountCents: core.serialization.property("total_amount_cents", core.serialization.number().optional()),
        totalAmountCurrency: core.serialization.property(
            "total_amount_currency",
            core.serialization.string().optional()
        ),
        legacy: core.serialization.boolean().optional(),
        fileUrl: core.serialization.property("file_url", core.serialization.string().optional()),
        customer: core.serialization.lazyObject(async () => (await import("../../..")).CustomerObject).optional(),
        subscriptions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).SubscriptionObject))
            .optional(),
        fees: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).FeeObject))
            .optional(),
        credits: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).CreditObject))
            .optional(),
    });

export declare namespace InvoiceObject {
    interface Raw {
        lago_id?: string | null;
        sequential_id?: number | null;
        number?: string | null;
        issuing_date?: string | null;
        invoice_type?: serializers.InvoiceType.Raw | null;
        status?: serializers.InvoiceStatus.Raw | null;
        payment_status?: serializers.PaymentStatus.Raw | null;
        amount_cents?: number | null;
        amount_currency?: string | null;
        vat_amount_cents?: number | null;
        vat_amount_currency?: string | null;
        credit_amount_cents?: number | null;
        credit_amount_currency?: string | null;
        total_amount_cents?: number | null;
        total_amount_currency?: string | null;
        legacy?: boolean | null;
        file_url?: string | null;
        customer?: serializers.CustomerObject.Raw | null;
        subscriptions?: serializers.SubscriptionObject.Raw[] | null;
        fees?: serializers.FeeObject.Raw[] | null;
        credits?: serializers.CreditObject.Raw[] | null;
    }
}
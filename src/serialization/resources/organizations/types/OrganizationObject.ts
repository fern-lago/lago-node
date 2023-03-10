/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const OrganizationObject: core.serialization.ObjectSchema<
    serializers.OrganizationObject.Raw,
    LagoApi.OrganizationObject
> = core.serialization.object({
    lagoId: core.serialization.property("lago_id", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    webhookUrl: core.serialization.property("webhook_url", core.serialization.string().optional()),
    country: core.serialization.string().optional(),
    addressLine1: core.serialization.property("address_line1", core.serialization.string().optional()),
    addressLine2: core.serialization.property("address_line2", core.serialization.string().optional()),
    state: core.serialization.string().optional(),
    zipode: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    city: core.serialization.string().optional(),
    legalName: core.serialization.property("legal_name", core.serialization.string().optional()),
    legalNumber: core.serialization.property("legal_number", core.serialization.string().optional()),
    timezone: core.serialization.string().optional(),
    billingConfiguration: core.serialization.property(
        "billing_configuration",
        core.serialization
            .lazyObject(async () => (await import("../../..")).BillingConfigurationOrganization)
            .optional()
    ),
});

export declare namespace OrganizationObject {
    interface Raw {
        lago_id?: string | null;
        name?: string | null;
        created_at?: string | null;
        webhook_url?: string | null;
        country?: string | null;
        address_line1?: string | null;
        address_line2?: string | null;
        state?: string | null;
        zipode?: string | null;
        email?: string | null;
        city?: string | null;
        legal_name?: string | null;
        legal_number?: string | null;
        timezone?: string | null;
        billing_configuration?: serializers.BillingConfigurationOrganization.Raw | null;
    }
}

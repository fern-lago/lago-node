/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as AddOnsClient } from "./api/resources/addOns/client/Client";
import { Client as BillableMetricsClient } from "./api/resources/billableMetrics/client/Client";
import { Client as CouponsClient } from "./api/resources/coupons/client/Client";
import { Client as CreditNotesClient } from "./api/resources/creditNotes/client/Client";
import { Client as CustomersClient } from "./api/resources/customers/client/Client";
import { Client as EventsClient } from "./api/resources/events/client/Client";
import { Client as InvoicesClient } from "./api/resources/invoices/client/Client";
import { Client as OrganizationsClient } from "./api/resources/organizations/client/Client";
import { Client as PlansClient } from "./api/resources/plans/client/Client";
import { Client as SubscriptionsClient } from "./api/resources/subscriptions/client/Client";
import { Client as WalletsClient } from "./api/resources/wallets/client/Client";
import { Client as WebhooksClient } from "./api/resources/webhooks/client/Client";

export declare namespace LagoApiClient {
    interface Options {
        environment?: environments.LagoApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class LagoApiClient {
    constructor(private readonly options: LagoApiClient.Options) {}

    #addOns: AddOnsClient | undefined;

    public get addOns(): AddOnsClient {
        return (this.#addOns ??= new AddOnsClient(this.options));
    }

    #billableMetrics: BillableMetricsClient | undefined;

    public get billableMetrics(): BillableMetricsClient {
        return (this.#billableMetrics ??= new BillableMetricsClient(this.options));
    }

    #coupons: CouponsClient | undefined;

    public get coupons(): CouponsClient {
        return (this.#coupons ??= new CouponsClient(this.options));
    }

    #creditNotes: CreditNotesClient | undefined;

    public get creditNotes(): CreditNotesClient {
        return (this.#creditNotes ??= new CreditNotesClient(this.options));
    }

    #customers: CustomersClient | undefined;

    public get customers(): CustomersClient {
        return (this.#customers ??= new CustomersClient(this.options));
    }

    #events: EventsClient | undefined;

    public get events(): EventsClient {
        return (this.#events ??= new EventsClient(this.options));
    }

    #invoices: InvoicesClient | undefined;

    public get invoices(): InvoicesClient {
        return (this.#invoices ??= new InvoicesClient(this.options));
    }

    #organizations: OrganizationsClient | undefined;

    public get organizations(): OrganizationsClient {
        return (this.#organizations ??= new OrganizationsClient(this.options));
    }

    #plans: PlansClient | undefined;

    public get plans(): PlansClient {
        return (this.#plans ??= new PlansClient(this.options));
    }

    #subscriptions: SubscriptionsClient | undefined;

    public get subscriptions(): SubscriptionsClient {
        return (this.#subscriptions ??= new SubscriptionsClient(this.options));
    }

    #wallets: WalletsClient | undefined;

    public get wallets(): WalletsClient {
        return (this.#wallets ??= new WalletsClient(this.options));
    }

    #webhooks: WebhooksClient | undefined;

    public get webhooks(): WebhooksClient {
        return (this.#webhooks ??= new WebhooksClient(this.options));
    }
}

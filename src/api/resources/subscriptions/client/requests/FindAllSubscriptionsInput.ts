/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FindAllSubscriptionsInput {
    /**
     * Number of page
     */
    page?: number;
    /**
     * Number of records per page
     */
    perPage?: number;
    /**
     * External customer ID
     */
    externalCustomerId: string;
}
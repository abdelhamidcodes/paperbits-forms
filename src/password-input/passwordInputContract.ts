import { Contract } from "@paperbits/common";
import { HyperlinkContract } from "@paperbits/common/editing";


/**
 * Password input data contract.
 */
export interface PasswordInputContract extends Contract {
    /**
     * Label on the password input.
     */
    label: string;

    /**
     * Placeholder.
     */
    placeholder: string;

    /**
     * Field name.
     */
    name: string;

    /**
     * Initial value.
     */
    value: string;

    /**
     * Indicates that field is readonly.
     */
    readonly: boolean;

    /**
     * Indicates that field is required.
     */
    required: boolean;

    /**
     * Maximum allowed number of characters.
     */
    maxLength: number;

    /**
     * Password input local styles.
     */
    styles?: any;

    /**
     * Keys of user roles.
     */
    roles?: string[];
    
    /**
     * Assigned hyperlink.
     */
    hyperlink?: HyperlinkContract;
}
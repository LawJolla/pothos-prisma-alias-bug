/* eslint-disable */
import type { Prisma, Account, Value, Score, AccountCheck, AccountTransaction, Address, Advertising, AutomatedMessage, BridgeAccountTransactionToTransactionItem, CustomerPlaidAccount, CustomerVehicleSearch, Date, Deal, StripeIdentity, DealFinanceBuyer, DealFinanceApp, DealFinanceOffer, DealFinanceStipulation, DealAction, DealAddOn, DealerAccount, DealerLicensePlate, DealerLicensePlateLog, DealerLicensePlateUser, Dealership, DealershipFloorPlan, DealershipIntegration, DealershipIntegrationService, DealLineItem, defaultArray, defaultString, Device, Disclosure, Doc, DriverLicense, ElectronicSignatureConsent, EmailAddress, EmailSubscriber, FacebookAd, FacebookAdGroup, File, FloorPlan, FloorPlanAction, FloorPlanLineItem, FloorPlanProvider, InAppNotification, Note, Notification, Offer, Permission, PhoneNumber, PhysicalAccess, PhysicalAccessLog, PlaidAccount, SignedDoc, Signer, SignerTag, SiteBanner, Store, Task, Trade, TransactionItem, TransactionTypeAllowedList, User, UserNotificationPreference, Vehicle, VehicleChecklist, VehiclePricingStat, VehicleBoughtFrom, VehicleDate, VehicleHistoryReport, VehicleImage, VehicleImageTag, VehicleOption, VehicleOptionTag, VehiclePrice, VehicleRecon, VehicleTaxPolicy, VehicleVideo, Vendor, WebUpdate } from "./client";
export default interface PrismaTypes {
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: Prisma.AccountCreateInput;
        Update: Prisma.AccountUpdateInput;
        RelationName: "values";
        ListRelations: "values";
        Relations: {
            values: {
                Shape: Value[];
                Name: "Value";
            };
        };
    };
    Value: {
        Name: "Value";
        Shape: Value;
        Include: Prisma.ValueInclude;
        Select: Prisma.ValueSelect;
        OrderBy: Prisma.ValueOrderByWithRelationInput;
        WhereUnique: Prisma.ValueWhereUniqueInput;
        Where: Prisma.ValueWhereInput;
        Create: Prisma.ValueCreateInput;
        Update: Prisma.ValueUpdateInput;
        RelationName: "account" | "scores";
        ListRelations: "scores";
        Relations: {
            account: {
                Shape: Account;
                Name: "Account";
            };
            scores: {
                Shape: Score[];
                Name: "Score";
            };
        };
    };
    Score: {
        Name: "Score";
        Shape: Score;
        Include: Prisma.ScoreInclude;
        Select: Prisma.ScoreSelect;
        OrderBy: Prisma.ScoreOrderByWithRelationInput;
        WhereUnique: Prisma.ScoreWhereUniqueInput;
        Where: Prisma.ScoreWhereInput;
        Create: Prisma.ScoreCreateInput;
        Update: Prisma.ScoreUpdateInput;
        RelationName: "value";
        ListRelations: never;
        Relations: {
            value: {
                Shape: Value;
                Name: "Value";
            };
        };
    };
    AccountCheck: {
        Name: "AccountCheck";
        Shape: AccountCheck;
        Include: Prisma.AccountCheckInclude;
        Select: Prisma.AccountCheckSelect;
        OrderBy: Prisma.AccountCheckOrderByWithRelationInput;
        WhereUnique: Prisma.AccountCheckWhereUniqueInput;
        Where: Prisma.AccountCheckWhereInput;
        Create: Prisma.AccountCheckCreateInput;
        Update: Prisma.AccountCheckUpdateInput;
        RelationName: "account" | "accountTransaction" | "items";
        ListRelations: "items";
        Relations: {
            account: {
                Shape: DealerAccount | null;
                Name: "DealerAccount";
            };
            accountTransaction: {
                Shape: AccountTransaction | null;
                Name: "AccountTransaction";
            };
            items: {
                Shape: TransactionItem[];
                Name: "TransactionItem";
            };
        };
    };
    AccountTransaction: {
        Name: "AccountTransaction";
        Shape: AccountTransaction;
        Include: Prisma.AccountTransactionInclude;
        Select: Prisma.AccountTransactionSelect;
        OrderBy: Prisma.AccountTransactionOrderByWithRelationInput;
        WhereUnique: Prisma.AccountTransactionWhereUniqueInput;
        Where: Prisma.AccountTransactionWhereInput;
        Create: Prisma.AccountTransactionCreateInput;
        Update: Prisma.AccountTransactionUpdateInput;
        RelationName: "account" | "check" | "dealership" | "dealLineItems" | "items";
        ListRelations: "dealLineItems" | "items";
        Relations: {
            account: {
                Shape: DealerAccount | null;
                Name: "DealerAccount";
            };
            check: {
                Shape: AccountCheck | null;
                Name: "AccountCheck";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            dealLineItems: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            items: {
                Shape: TransactionItem[];
                Name: "TransactionItem";
            };
        };
    };
    Address: {
        Name: "Address";
        Shape: Address;
        Include: Prisma.AddressInclude;
        Select: Prisma.AddressSelect;
        OrderBy: Prisma.AddressOrderByWithRelationInput;
        WhereUnique: Prisma.AddressWhereUniqueInput;
        Where: Prisma.AddressWhereInput;
        Create: Prisma.AddressCreateInput;
        Update: Prisma.AddressUpdateInput;
        RelationName: "user" | "vendor" | "DealerLicensePlateUser" | "DriverLicense" | "VehicleBoughtFrom" | "deals";
        ListRelations: "DealerLicensePlateUser" | "DriverLicense" | "VehicleBoughtFrom" | "deals";
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
            vendor: {
                Shape: Vendor | null;
                Name: "Vendor";
            };
            DealerLicensePlateUser: {
                Shape: DealerLicensePlateUser[];
                Name: "DealerLicensePlateUser";
            };
            DriverLicense: {
                Shape: DriverLicense[];
                Name: "DriverLicense";
            };
            VehicleBoughtFrom: {
                Shape: VehicleBoughtFrom[];
                Name: "VehicleBoughtFrom";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
        };
    };
    Advertising: {
        Name: "Advertising";
        Shape: Advertising;
        Include: Prisma.AdvertisingInclude;
        Select: Prisma.AdvertisingSelect;
        OrderBy: Prisma.AdvertisingOrderByWithRelationInput;
        WhereUnique: Prisma.AdvertisingWhereUniqueInput;
        Where: Prisma.AdvertisingWhereInput;
        Create: Prisma.AdvertisingCreateInput;
        Update: Prisma.AdvertisingUpdateInput;
        RelationName: "facebook" | "vehicle";
        ListRelations: never;
        Relations: {
            facebook: {
                Shape: FacebookAd | null;
                Name: "FacebookAd";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    AutomatedMessage: {
        Name: "AutomatedMessage";
        Shape: AutomatedMessage;
        Include: Prisma.AutomatedMessageInclude;
        Select: Prisma.AutomatedMessageSelect;
        OrderBy: Prisma.AutomatedMessageOrderByWithRelationInput;
        WhereUnique: Prisma.AutomatedMessageWhereUniqueInput;
        Where: Prisma.AutomatedMessageWhereInput;
        Create: Prisma.AutomatedMessageCreateInput;
        Update: Prisma.AutomatedMessageUpdateInput;
        RelationName: "deal";
        ListRelations: never;
        Relations: {
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
        };
    };
    BridgeAccountTransactionToTransactionItem: {
        Name: "BridgeAccountTransactionToTransactionItem";
        Shape: BridgeAccountTransactionToTransactionItem;
        Include: Prisma.BridgeAccountTransactionToTransactionItemInclude;
        Select: Prisma.BridgeAccountTransactionToTransactionItemSelect;
        OrderBy: Prisma.BridgeAccountTransactionToTransactionItemOrderByWithRelationInput;
        WhereUnique: Prisma.BridgeAccountTransactionToTransactionItemWhereUniqueInput;
        Where: Prisma.BridgeAccountTransactionToTransactionItemWhereInput;
        Create: Prisma.BridgeAccountTransactionToTransactionItemCreateInput;
        Update: Prisma.BridgeAccountTransactionToTransactionItemUpdateInput;
        RelationName: "dealership" | "vendor";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            vendor: {
                Shape: Vendor | null;
                Name: "Vendor";
            };
        };
    };
    CustomerPlaidAccount: {
        Name: "CustomerPlaidAccount";
        Shape: CustomerPlaidAccount;
        Include: Prisma.CustomerPlaidAccountInclude;
        Select: Prisma.CustomerPlaidAccountSelect;
        OrderBy: Prisma.CustomerPlaidAccountOrderByWithRelationInput;
        WhereUnique: Prisma.CustomerPlaidAccountWhereUniqueInput;
        Where: Prisma.CustomerPlaidAccountWhereInput;
        Create: Prisma.CustomerPlaidAccountCreateInput;
        Update: Prisma.CustomerPlaidAccountUpdateInput;
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    CustomerVehicleSearch: {
        Name: "CustomerVehicleSearch";
        Shape: CustomerVehicleSearch;
        Include: Prisma.CustomerVehicleSearchInclude;
        Select: Prisma.CustomerVehicleSearchSelect;
        OrderBy: Prisma.CustomerVehicleSearchOrderByWithRelationInput;
        WhereUnique: Prisma.CustomerVehicleSearchWhereUniqueInput;
        Where: Prisma.CustomerVehicleSearchWhereInput;
        Create: Prisma.CustomerVehicleSearchCreateInput;
        Update: Prisma.CustomerVehicleSearchUpdateInput;
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    Date: {
        Name: "Date";
        Shape: Date;
        Include: Prisma.DateInclude;
        Select: Prisma.DateSelect;
        OrderBy: Prisma.DateOrderByWithRelationInput;
        WhereUnique: Prisma.DateWhereUniqueInput;
        Where: Prisma.DateWhereInput;
        Create: Prisma.DateCreateInput;
        Update: Prisma.DateUpdateInput;
        RelationName: "action" | "deal";
        ListRelations: never;
        Relations: {
            action: {
                Shape: DealAction | null;
                Name: "DealAction";
            };
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
        };
    };
    Deal: {
        Name: "Deal";
        Shape: Deal;
        Include: Prisma.DealInclude;
        Select: Prisma.DealSelect;
        OrderBy: Prisma.DealOrderByWithRelationInput;
        WhereUnique: Prisma.DealWhereUniqueInput;
        Where: Prisma.DealWhereInput;
        Create: Prisma.DealCreateInput;
        Update: Prisma.DealUpdateInput;
        RelationName: "dealership" | "store" | "automatedMessages" | "dates" | "actions" | "addOns" | "lineItems" | "docs" | "files" | "notes" | "offers" | "tasks" | "addresses" | "signers" | "emailAddresses" | "phoneNumbers" | "trades" | "users" | "vehicles" | "financeApps" | "disclosures";
        ListRelations: "automatedMessages" | "dates" | "actions" | "addOns" | "lineItems" | "docs" | "files" | "notes" | "offers" | "tasks" | "addresses" | "signers" | "emailAddresses" | "phoneNumbers" | "trades" | "users" | "vehicles" | "financeApps" | "disclosures";
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            automatedMessages: {
                Shape: AutomatedMessage[];
                Name: "AutomatedMessage";
            };
            dates: {
                Shape: Date[];
                Name: "Date";
            };
            actions: {
                Shape: DealAction[];
                Name: "DealAction";
            };
            addOns: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            lineItems: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
            files: {
                Shape: File[];
                Name: "File";
            };
            notes: {
                Shape: Note[];
                Name: "Note";
            };
            offers: {
                Shape: Offer[];
                Name: "Offer";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            addresses: {
                Shape: Address[];
                Name: "Address";
            };
            signers: {
                Shape: Signer[];
                Name: "Signer";
            };
            emailAddresses: {
                Shape: EmailAddress[];
                Name: "EmailAddress";
            };
            phoneNumbers: {
                Shape: PhoneNumber[];
                Name: "PhoneNumber";
            };
            trades: {
                Shape: Trade[];
                Name: "Trade";
            };
            users: {
                Shape: User[];
                Name: "User";
            };
            vehicles: {
                Shape: Vehicle[];
                Name: "Vehicle";
            };
            financeApps: {
                Shape: DealFinanceApp[];
                Name: "DealFinanceApp";
            };
            disclosures: {
                Shape: Disclosure[];
                Name: "Disclosure";
            };
        };
    };
    StripeIdentity: {
        Name: "StripeIdentity";
        Shape: StripeIdentity;
        Include: Prisma.StripeIdentityInclude;
        Select: Prisma.StripeIdentitySelect;
        OrderBy: Prisma.StripeIdentityOrderByWithRelationInput;
        WhereUnique: Prisma.StripeIdentityWhereUniqueInput;
        Where: Prisma.StripeIdentityWhereInput;
        Create: Prisma.StripeIdentityCreateInput;
        Update: Prisma.StripeIdentityUpdateInput;
        RelationName: "dealFinanceBuyer";
        ListRelations: never;
        Relations: {
            dealFinanceBuyer: {
                Shape: DealFinanceBuyer | null;
                Name: "DealFinanceBuyer";
            };
        };
    };
    DealFinanceBuyer: {
        Name: "DealFinanceBuyer";
        Shape: DealFinanceBuyer;
        Include: Prisma.DealFinanceBuyerInclude;
        Select: Prisma.DealFinanceBuyerSelect;
        OrderBy: Prisma.DealFinanceBuyerOrderByWithRelationInput;
        WhereUnique: Prisma.DealFinanceBuyerWhereUniqueInput;
        Where: Prisma.DealFinanceBuyerWhereInput;
        Create: Prisma.DealFinanceBuyerCreateInput;
        Update: Prisma.DealFinanceBuyerUpdateInput;
        RelationName: "stripeIdentities" | "buyerApplications" | "coBuyerApplications";
        ListRelations: "stripeIdentities" | "buyerApplications" | "coBuyerApplications";
        Relations: {
            stripeIdentities: {
                Shape: StripeIdentity[];
                Name: "StripeIdentity";
            };
            buyerApplications: {
                Shape: DealFinanceApp[];
                Name: "DealFinanceApp";
            };
            coBuyerApplications: {
                Shape: DealFinanceApp[];
                Name: "DealFinanceApp";
            };
        };
    };
    DealFinanceApp: {
        Name: "DealFinanceApp";
        Shape: DealFinanceApp;
        Include: Prisma.DealFinanceAppInclude;
        Select: Prisma.DealFinanceAppSelect;
        OrderBy: Prisma.DealFinanceAppOrderByWithRelationInput;
        WhereUnique: Prisma.DealFinanceAppWhereUniqueInput;
        Where: Prisma.DealFinanceAppWhereInput;
        Create: Prisma.DealFinanceAppCreateInput;
        Update: Prisma.DealFinanceAppUpdateInput;
        RelationName: "buyer" | "coBuyer" | "approvedOffer" | "offers" | "user" | "deal" | "dealership";
        ListRelations: "offers";
        Relations: {
            buyer: {
                Shape: DealFinanceBuyer | null;
                Name: "DealFinanceBuyer";
            };
            coBuyer: {
                Shape: DealFinanceBuyer | null;
                Name: "DealFinanceBuyer";
            };
            approvedOffer: {
                Shape: DealFinanceOffer | null;
                Name: "DealFinanceOffer";
            };
            offers: {
                Shape: DealFinanceOffer[];
                Name: "DealFinanceOffer";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership;
                Name: "Dealership";
            };
        };
    };
    DealFinanceOffer: {
        Name: "DealFinanceOffer";
        Shape: DealFinanceOffer;
        Include: Prisma.DealFinanceOfferInclude;
        Select: Prisma.DealFinanceOfferSelect;
        OrderBy: Prisma.DealFinanceOfferOrderByWithRelationInput;
        WhereUnique: Prisma.DealFinanceOfferWhereUniqueInput;
        Where: Prisma.DealFinanceOfferWhereInput;
        Create: Prisma.DealFinanceOfferCreateInput;
        Update: Prisma.DealFinanceOfferUpdateInput;
        RelationName: "approvedOffer" | "application" | "stipulations";
        ListRelations: "stipulations";
        Relations: {
            approvedOffer: {
                Shape: DealFinanceApp | null;
                Name: "DealFinanceApp";
            };
            application: {
                Shape: DealFinanceApp;
                Name: "DealFinanceApp";
            };
            stipulations: {
                Shape: DealFinanceStipulation[];
                Name: "DealFinanceStipulation";
            };
        };
    };
    DealFinanceStipulation: {
        Name: "DealFinanceStipulation";
        Shape: DealFinanceStipulation;
        Include: Prisma.DealFinanceStipulationInclude;
        Select: Prisma.DealFinanceStipulationSelect;
        OrderBy: Prisma.DealFinanceStipulationOrderByWithRelationInput;
        WhereUnique: Prisma.DealFinanceStipulationWhereUniqueInput;
        Where: Prisma.DealFinanceStipulationWhereInput;
        Create: Prisma.DealFinanceStipulationCreateInput;
        Update: Prisma.DealFinanceStipulationUpdateInput;
        RelationName: "offer";
        ListRelations: never;
        Relations: {
            offer: {
                Shape: DealFinanceOffer;
                Name: "DealFinanceOffer";
            };
        };
    };
    DealAction: {
        Name: "DealAction";
        Shape: DealAction;
        Include: Prisma.DealActionInclude;
        Select: Prisma.DealActionSelect;
        OrderBy: Prisma.DealActionOrderByWithRelationInput;
        WhereUnique: Prisma.DealActionWhereUniqueInput;
        Where: Prisma.DealActionWhereInput;
        Create: Prisma.DealActionCreateInput;
        Update: Prisma.DealActionUpdateInput;
        RelationName: "addOn" | "deal" | "dealership" | "store" | "vehicle" | "dates" | "inheritsFrom" | "inheritsTo" | "lineItems";
        ListRelations: "dates" | "inheritsTo" | "lineItems";
        Relations: {
            addOn: {
                Shape: DealAddOn | null;
                Name: "DealAddOn";
            };
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            dates: {
                Shape: Date[];
                Name: "Date";
            };
            inheritsFrom: {
                Shape: DealAction | null;
                Name: "DealAction";
            };
            inheritsTo: {
                Shape: DealAction[];
                Name: "DealAction";
            };
            lineItems: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
        };
    };
    DealAddOn: {
        Name: "DealAddOn";
        Shape: DealAddOn;
        Include: Prisma.DealAddOnInclude;
        Select: Prisma.DealAddOnSelect;
        OrderBy: Prisma.DealAddOnOrderByWithRelationInput;
        WhereUnique: Prisma.DealAddOnWhereUniqueInput;
        Where: Prisma.DealAddOnWhereInput;
        Create: Prisma.DealAddOnCreateInput;
        Update: Prisma.DealAddOnUpdateInput;
        RelationName: "deal" | "dealership" | "store" | "vehicle" | "actions" | "inheritsFrom" | "inheritsTo" | "tasks" | "lineItems" | "docs";
        ListRelations: "actions" | "inheritsTo" | "tasks" | "lineItems" | "docs";
        Relations: {
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            actions: {
                Shape: DealAction[];
                Name: "DealAction";
            };
            inheritsFrom: {
                Shape: DealAddOn | null;
                Name: "DealAddOn";
            };
            inheritsTo: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            lineItems: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
        };
    };
    DealerAccount: {
        Name: "DealerAccount";
        Shape: DealerAccount;
        Include: Prisma.DealerAccountInclude;
        Select: Prisma.DealerAccountSelect;
        OrderBy: Prisma.DealerAccountOrderByWithRelationInput;
        WhereUnique: Prisma.DealerAccountWhereUniqueInput;
        Where: Prisma.DealerAccountWhereInput;
        Create: Prisma.DealerAccountCreateInput;
        Update: Prisma.DealerAccountUpdateInput;
        RelationName: "dealership" | "plaid" | "checks" | "transactions";
        ListRelations: "checks" | "transactions";
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            plaid: {
                Shape: PlaidAccount | null;
                Name: "PlaidAccount";
            };
            checks: {
                Shape: AccountCheck[];
                Name: "AccountCheck";
            };
            transactions: {
                Shape: AccountTransaction[];
                Name: "AccountTransaction";
            };
        };
    };
    DealerLicensePlate: {
        Name: "DealerLicensePlate";
        Shape: DealerLicensePlate;
        Include: Prisma.DealerLicensePlateInclude;
        Select: Prisma.DealerLicensePlateSelect;
        OrderBy: Prisma.DealerLicensePlateOrderByWithRelationInput;
        WhereUnique: Prisma.DealerLicensePlateWhereUniqueInput;
        Where: Prisma.DealerLicensePlateWhereInput;
        Create: Prisma.DealerLicensePlateCreateInput;
        Update: Prisma.DealerLicensePlateUpdateInput;
        RelationName: "dealership" | "store" | "licensePlateLogs";
        ListRelations: "licensePlateLogs";
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            licensePlateLogs: {
                Shape: DealerLicensePlateLog[];
                Name: "DealerLicensePlateLog";
            };
        };
    };
    DealerLicensePlateLog: {
        Name: "DealerLicensePlateLog";
        Shape: DealerLicensePlateLog;
        Include: Prisma.DealerLicensePlateLogInclude;
        Select: Prisma.DealerLicensePlateLogSelect;
        OrderBy: Prisma.DealerLicensePlateLogOrderByWithRelationInput;
        WhereUnique: Prisma.DealerLicensePlateLogWhereUniqueInput;
        Where: Prisma.DealerLicensePlateLogWhereInput;
        Create: Prisma.DealerLicensePlateLogCreateInput;
        Update: Prisma.DealerLicensePlateLogUpdateInput;
        RelationName: "dealerLicensePlate" | "dealership" | "dealerLicensePlateUser" | "store" | "user" | "vehicle";
        ListRelations: never;
        Relations: {
            dealerLicensePlate: {
                Shape: DealerLicensePlate | null;
                Name: "DealerLicensePlate";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            dealerLicensePlateUser: {
                Shape: DealerLicensePlateUser | null;
                Name: "DealerLicensePlateUser";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    DealerLicensePlateUser: {
        Name: "DealerLicensePlateUser";
        Shape: DealerLicensePlateUser;
        Include: Prisma.DealerLicensePlateUserInclude;
        Select: Prisma.DealerLicensePlateUserSelect;
        OrderBy: Prisma.DealerLicensePlateUserOrderByWithRelationInput;
        WhereUnique: Prisma.DealerLicensePlateUserWhereUniqueInput;
        Where: Prisma.DealerLicensePlateUserWhereInput;
        Create: Prisma.DealerLicensePlateUserCreateInput;
        Update: Prisma.DealerLicensePlateUserUpdateInput;
        RelationName: "address" | "dealership" | "driverLicense" | "user" | "checkouts";
        ListRelations: "checkouts";
        Relations: {
            address: {
                Shape: Address | null;
                Name: "Address";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            driverLicense: {
                Shape: DriverLicense | null;
                Name: "DriverLicense";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
            checkouts: {
                Shape: DealerLicensePlateLog[];
                Name: "DealerLicensePlateLog";
            };
        };
    };
    Dealership: {
        Name: "Dealership";
        Shape: Dealership;
        Include: Prisma.DealershipInclude;
        Select: Prisma.DealershipSelect;
        OrderBy: Prisma.DealershipOrderByWithRelationInput;
        WhereUnique: Prisma.DealershipWhereUniqueInput;
        Where: Prisma.DealershipWhereInput;
        Create: Prisma.DealershipCreateInput;
        Update: Prisma.DealershipUpdateInput;
        RelationName: "transactions" | "BridgeAccountTransactionToTransactionItem" | "deals" | "actions" | "addOns" | "accounts" | "licensePlates" | "licensePlateLogs" | "licensePlateUsers" | "dealershipFloorPlans" | "integrations" | "lineItems" | "docs" | "emailSubscribers" | "facebookAdGroups" | "files" | "notes" | "user" | "plaidAccounts" | "siteBanners" | "stores" | "tasks" | "TransactionItem" | "allowedTransactionTypes" | "customers" | "workers" | "vehicles" | "vendors" | "webUpdates" | "financeApps";
        ListRelations: "transactions" | "BridgeAccountTransactionToTransactionItem" | "deals" | "actions" | "addOns" | "accounts" | "licensePlates" | "licensePlateLogs" | "licensePlateUsers" | "dealershipFloorPlans" | "integrations" | "lineItems" | "docs" | "emailSubscribers" | "facebookAdGroups" | "files" | "notes" | "user" | "plaidAccounts" | "siteBanners" | "stores" | "tasks" | "TransactionItem" | "allowedTransactionTypes" | "customers" | "workers" | "vehicles" | "vendors" | "webUpdates" | "financeApps";
        Relations: {
            transactions: {
                Shape: AccountTransaction[];
                Name: "AccountTransaction";
            };
            BridgeAccountTransactionToTransactionItem: {
                Shape: BridgeAccountTransactionToTransactionItem[];
                Name: "BridgeAccountTransactionToTransactionItem";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
            actions: {
                Shape: DealAction[];
                Name: "DealAction";
            };
            addOns: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            accounts: {
                Shape: DealerAccount[];
                Name: "DealerAccount";
            };
            licensePlates: {
                Shape: DealerLicensePlate[];
                Name: "DealerLicensePlate";
            };
            licensePlateLogs: {
                Shape: DealerLicensePlateLog[];
                Name: "DealerLicensePlateLog";
            };
            licensePlateUsers: {
                Shape: DealerLicensePlateUser[];
                Name: "DealerLicensePlateUser";
            };
            dealershipFloorPlans: {
                Shape: DealershipFloorPlan[];
                Name: "DealershipFloorPlan";
            };
            integrations: {
                Shape: DealershipIntegration[];
                Name: "DealershipIntegration";
            };
            lineItems: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
            emailSubscribers: {
                Shape: EmailSubscriber[];
                Name: "EmailSubscriber";
            };
            facebookAdGroups: {
                Shape: FacebookAdGroup[];
                Name: "FacebookAdGroup";
            };
            files: {
                Shape: File[];
                Name: "File";
            };
            notes: {
                Shape: Note[];
                Name: "Note";
            };
            user: {
                Shape: Permission[];
                Name: "Permission";
            };
            plaidAccounts: {
                Shape: PlaidAccount[];
                Name: "PlaidAccount";
            };
            siteBanners: {
                Shape: SiteBanner[];
                Name: "SiteBanner";
            };
            stores: {
                Shape: Store[];
                Name: "Store";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            TransactionItem: {
                Shape: TransactionItem[];
                Name: "TransactionItem";
            };
            allowedTransactionTypes: {
                Shape: TransactionTypeAllowedList[];
                Name: "TransactionTypeAllowedList";
            };
            customers: {
                Shape: User[];
                Name: "User";
            };
            workers: {
                Shape: User[];
                Name: "User";
            };
            vehicles: {
                Shape: Vehicle[];
                Name: "Vehicle";
            };
            vendors: {
                Shape: Vendor[];
                Name: "Vendor";
            };
            webUpdates: {
                Shape: WebUpdate[];
                Name: "WebUpdate";
            };
            financeApps: {
                Shape: DealFinanceApp[];
                Name: "DealFinanceApp";
            };
        };
    };
    DealershipFloorPlan: {
        Name: "DealershipFloorPlan";
        Shape: DealershipFloorPlan;
        Include: Prisma.DealershipFloorPlanInclude;
        Select: Prisma.DealershipFloorPlanSelect;
        OrderBy: Prisma.DealershipFloorPlanOrderByWithRelationInput;
        WhereUnique: Prisma.DealershipFloorPlanWhereUniqueInput;
        Where: Prisma.DealershipFloorPlanWhereInput;
        Create: Prisma.DealershipFloorPlanCreateInput;
        Update: Prisma.DealershipFloorPlanUpdateInput;
        RelationName: "dealership" | "floorPlanProvider";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            floorPlanProvider: {
                Shape: FloorPlanProvider | null;
                Name: "FloorPlanProvider";
            };
        };
    };
    DealershipIntegration: {
        Name: "DealershipIntegration";
        Shape: DealershipIntegration;
        Include: Prisma.DealershipIntegrationInclude;
        Select: Prisma.DealershipIntegrationSelect;
        OrderBy: Prisma.DealershipIntegrationOrderByWithRelationInput;
        WhereUnique: Prisma.DealershipIntegrationWhereUniqueInput;
        Where: Prisma.DealershipIntegrationWhereInput;
        Create: Prisma.DealershipIntegrationCreateInput;
        Update: Prisma.DealershipIntegrationUpdateInput;
        RelationName: "dealership" | "service";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            service: {
                Shape: DealershipIntegrationService | null;
                Name: "DealershipIntegrationService";
            };
        };
    };
    DealershipIntegrationService: {
        Name: "DealershipIntegrationService";
        Shape: DealershipIntegrationService;
        Include: Prisma.DealershipIntegrationServiceInclude;
        Select: Prisma.DealershipIntegrationServiceSelect;
        OrderBy: Prisma.DealershipIntegrationServiceOrderByWithRelationInput;
        WhereUnique: Prisma.DealershipIntegrationServiceWhereUniqueInput;
        Where: Prisma.DealershipIntegrationServiceWhereInput;
        Create: Prisma.DealershipIntegrationServiceCreateInput;
        Update: Prisma.DealershipIntegrationServiceUpdateInput;
        RelationName: "dealerships";
        ListRelations: "dealerships";
        Relations: {
            dealerships: {
                Shape: DealershipIntegration[];
                Name: "DealershipIntegration";
            };
        };
    };
    DealLineItem: {
        Name: "DealLineItem";
        Shape: DealLineItem;
        Include: Prisma.DealLineItemInclude;
        Select: Prisma.DealLineItemSelect;
        OrderBy: Prisma.DealLineItemOrderByWithRelationInput;
        WhereUnique: Prisma.DealLineItemWhereUniqueInput;
        Where: Prisma.DealLineItemWhereInput;
        Create: Prisma.DealLineItemCreateInput;
        Update: Prisma.DealLineItemUpdateInput;
        RelationName: "action" | "deal" | "inheritsFrom" | "dealership" | "store" | "task" | "transaction" | "vehicleFee" | "dealAddOns" | "inheritsFromOpposite";
        ListRelations: "dealAddOns" | "inheritsFromOpposite";
        Relations: {
            action: {
                Shape: DealAction | null;
                Name: "DealAction";
            };
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            inheritsFrom: {
                Shape: DealLineItem | null;
                Name: "DealLineItem";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            task: {
                Shape: Task | null;
                Name: "Task";
            };
            transaction: {
                Shape: AccountTransaction | null;
                Name: "AccountTransaction";
            };
            vehicleFee: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            dealAddOns: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            inheritsFromOpposite: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
        };
    };
    defaultArray: {
        Name: "defaultArray";
        Shape: defaultArray;
        Include: never;
        Select: Prisma.defaultArraySelect;
        OrderBy: Prisma.defaultArrayOrderByWithRelationInput;
        WhereUnique: Prisma.defaultArrayWhereUniqueInput;
        Where: Prisma.defaultArrayWhereInput;
        Create: Prisma.defaultArrayCreateInput;
        Update: Prisma.defaultArrayUpdateInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    defaultString: {
        Name: "defaultString";
        Shape: defaultString;
        Include: never;
        Select: Prisma.defaultStringSelect;
        OrderBy: Prisma.defaultStringOrderByWithRelationInput;
        WhereUnique: Prisma.defaultStringWhereUniqueInput;
        Where: Prisma.defaultStringWhereInput;
        Create: Prisma.defaultStringCreateInput;
        Update: Prisma.defaultStringUpdateInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    Device: {
        Name: "Device";
        Shape: Device;
        Include: Prisma.DeviceInclude;
        Select: Prisma.DeviceSelect;
        OrderBy: Prisma.DeviceOrderByWithRelationInput;
        WhereUnique: Prisma.DeviceWhereUniqueInput;
        Where: Prisma.DeviceWhereInput;
        Create: Prisma.DeviceCreateInput;
        Update: Prisma.DeviceUpdateInput;
        RelationName: "users";
        ListRelations: "users";
        Relations: {
            users: {
                Shape: User[];
                Name: "User";
            };
        };
    };
    Disclosure: {
        Name: "Disclosure";
        Shape: Disclosure;
        Include: Prisma.DisclosureInclude;
        Select: Prisma.DisclosureSelect;
        OrderBy: Prisma.DisclosureOrderByWithRelationInput;
        WhereUnique: Prisma.DisclosureWhereUniqueInput;
        Where: Prisma.DisclosureWhereInput;
        Create: Prisma.DisclosureCreateInput;
        Update: Prisma.DisclosureUpdateInput;
        RelationName: "vehicles" | "deals";
        ListRelations: "vehicles" | "deals";
        Relations: {
            vehicles: {
                Shape: Vehicle[];
                Name: "Vehicle";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
        };
    };
    Doc: {
        Name: "Doc";
        Shape: Doc;
        Include: Prisma.DocInclude;
        Select: Prisma.DocSelect;
        OrderBy: Prisma.DocOrderByWithRelationInput;
        WhereUnique: Prisma.DocWhereUniqueInput;
        Where: Prisma.DocWhereInput;
        Create: Prisma.DocCreateInput;
        Update: Prisma.DocUpdateInput;
        RelationName: "deal" | "dealership" | "store" | "vehicle" | "inheritsFromOpposite" | "inheritsFrom" | "signed" | "DealAddOn" | "completedFile" | "signers" | "users";
        ListRelations: "inheritsFromOpposite" | "signed" | "DealAddOn" | "signers" | "users";
        Relations: {
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            inheritsFromOpposite: {
                Shape: Doc[];
                Name: "Doc";
            };
            inheritsFrom: {
                Shape: Doc | null;
                Name: "Doc";
            };
            signed: {
                Shape: SignedDoc[];
                Name: "SignedDoc";
            };
            DealAddOn: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            completedFile: {
                Shape: File | null;
                Name: "File";
            };
            signers: {
                Shape: Signer[];
                Name: "Signer";
            };
            users: {
                Shape: User[];
                Name: "User";
            };
        };
    };
    DriverLicense: {
        Name: "DriverLicense";
        Shape: DriverLicense;
        Include: Prisma.DriverLicenseInclude;
        Select: Prisma.DriverLicenseSelect;
        OrderBy: Prisma.DriverLicenseOrderByWithRelationInput;
        WhereUnique: Prisma.DriverLicenseWhereUniqueInput;
        Where: Prisma.DriverLicenseWhereInput;
        Create: Prisma.DriverLicenseCreateInput;
        Update: Prisma.DriverLicenseUpdateInput;
        RelationName: "address" | "file" | "DealerLicensePlateUser" | "user";
        ListRelations: "DealerLicensePlateUser";
        Relations: {
            address: {
                Shape: Address | null;
                Name: "Address";
            };
            file: {
                Shape: File | null;
                Name: "File";
            };
            DealerLicensePlateUser: {
                Shape: DealerLicensePlateUser[];
                Name: "DealerLicensePlateUser";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    ElectronicSignatureConsent: {
        Name: "ElectronicSignatureConsent";
        Shape: ElectronicSignatureConsent;
        Include: Prisma.ElectronicSignatureConsentInclude;
        Select: Prisma.ElectronicSignatureConsentSelect;
        OrderBy: Prisma.ElectronicSignatureConsentOrderByWithRelationInput;
        WhereUnique: Prisma.ElectronicSignatureConsentWhereUniqueInput;
        Where: Prisma.ElectronicSignatureConsentWhereInput;
        Create: Prisma.ElectronicSignatureConsentCreateInput;
        Update: Prisma.ElectronicSignatureConsentUpdateInput;
        RelationName: "signer";
        ListRelations: never;
        Relations: {
            signer: {
                Shape: Signer | null;
                Name: "Signer";
            };
        };
    };
    EmailAddress: {
        Name: "EmailAddress";
        Shape: EmailAddress;
        Include: Prisma.EmailAddressInclude;
        Select: Prisma.EmailAddressSelect;
        OrderBy: Prisma.EmailAddressOrderByWithRelationInput;
        WhereUnique: Prisma.EmailAddressWhereUniqueInput;
        Where: Prisma.EmailAddressWhereInput;
        Create: Prisma.EmailAddressCreateInput;
        Update: Prisma.EmailAddressUpdateInput;
        RelationName: "user" | "deals";
        ListRelations: "deals";
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
        };
    };
    EmailSubscriber: {
        Name: "EmailSubscriber";
        Shape: EmailSubscriber;
        Include: Prisma.EmailSubscriberInclude;
        Select: Prisma.EmailSubscriberSelect;
        OrderBy: Prisma.EmailSubscriberOrderByWithRelationInput;
        WhereUnique: Prisma.EmailSubscriberWhereUniqueInput;
        Where: Prisma.EmailSubscriberWhereInput;
        Create: Prisma.EmailSubscriberCreateInput;
        Update: Prisma.EmailSubscriberUpdateInput;
        RelationName: "dealer" | "user";
        ListRelations: never;
        Relations: {
            dealer: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    FacebookAd: {
        Name: "FacebookAd";
        Shape: FacebookAd;
        Include: Prisma.FacebookAdInclude;
        Select: Prisma.FacebookAdSelect;
        OrderBy: Prisma.FacebookAdOrderByWithRelationInput;
        WhereUnique: Prisma.FacebookAdWhereUniqueInput;
        Where: Prisma.FacebookAdWhereInput;
        Create: Prisma.FacebookAdCreateInput;
        Update: Prisma.FacebookAdUpdateInput;
        RelationName: "advertising";
        ListRelations: never;
        Relations: {
            advertising: {
                Shape: Advertising | null;
                Name: "Advertising";
            };
        };
    };
    FacebookAdGroup: {
        Name: "FacebookAdGroup";
        Shape: FacebookAdGroup;
        Include: Prisma.FacebookAdGroupInclude;
        Select: Prisma.FacebookAdGroupSelect;
        OrderBy: Prisma.FacebookAdGroupOrderByWithRelationInput;
        WhereUnique: Prisma.FacebookAdGroupWhereUniqueInput;
        Where: Prisma.FacebookAdGroupWhereInput;
        Create: Prisma.FacebookAdGroupCreateInput;
        Update: Prisma.FacebookAdGroupUpdateInput;
        RelationName: "dealership";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
        };
    };
    File: {
        Name: "File";
        Shape: File;
        Include: Prisma.FileInclude;
        Select: Prisma.FileSelect;
        OrderBy: Prisma.FileOrderByWithRelationInput;
        WhereUnique: Prisma.FileWhereUniqueInput;
        Where: Prisma.FileWhereInput;
        Create: Prisma.FileCreateInput;
        Update: Prisma.FileUpdateInput;
        RelationName: "deal" | "dealership" | "signer" | "store" | "user" | "vehicle" | "DriverLicense" | "completedFile";
        ListRelations: "DriverLicense";
        Relations: {
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            signer: {
                Shape: Signer | null;
                Name: "Signer";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            DriverLicense: {
                Shape: DriverLicense[];
                Name: "DriverLicense";
            };
            completedFile: {
                Shape: Doc | null;
                Name: "Doc";
            };
        };
    };
    FloorPlan: {
        Name: "FloorPlan";
        Shape: FloorPlan;
        Include: Prisma.FloorPlanInclude;
        Select: Prisma.FloorPlanSelect;
        OrderBy: Prisma.FloorPlanOrderByWithRelationInput;
        WhereUnique: Prisma.FloorPlanWhereUniqueInput;
        Where: Prisma.FloorPlanWhereInput;
        Create: Prisma.FloorPlanCreateInput;
        Update: Prisma.FloorPlanUpdateInput;
        RelationName: "floorPlanProvider" | "floorPlanActions" | "lineItems" | "Vehicle";
        ListRelations: "floorPlanActions" | "lineItems" | "Vehicle";
        Relations: {
            floorPlanProvider: {
                Shape: FloorPlanProvider | null;
                Name: "FloorPlanProvider";
            };
            floorPlanActions: {
                Shape: FloorPlanAction[];
                Name: "FloorPlanAction";
            };
            lineItems: {
                Shape: FloorPlanLineItem[];
                Name: "FloorPlanLineItem";
            };
            Vehicle: {
                Shape: Vehicle[];
                Name: "Vehicle";
            };
        };
    };
    FloorPlanAction: {
        Name: "FloorPlanAction";
        Shape: FloorPlanAction;
        Include: Prisma.FloorPlanActionInclude;
        Select: Prisma.FloorPlanActionSelect;
        OrderBy: Prisma.FloorPlanActionOrderByWithRelationInput;
        WhereUnique: Prisma.FloorPlanActionWhereUniqueInput;
        Where: Prisma.FloorPlanActionWhereInput;
        Create: Prisma.FloorPlanActionCreateInput;
        Update: Prisma.FloorPlanActionUpdateInput;
        RelationName: "floorplan";
        ListRelations: never;
        Relations: {
            floorplan: {
                Shape: FloorPlan | null;
                Name: "FloorPlan";
            };
        };
    };
    FloorPlanLineItem: {
        Name: "FloorPlanLineItem";
        Shape: FloorPlanLineItem;
        Include: Prisma.FloorPlanLineItemInclude;
        Select: Prisma.FloorPlanLineItemSelect;
        OrderBy: Prisma.FloorPlanLineItemOrderByWithRelationInput;
        WhereUnique: Prisma.FloorPlanLineItemWhereUniqueInput;
        Where: Prisma.FloorPlanLineItemWhereInput;
        Create: Prisma.FloorPlanLineItemCreateInput;
        Update: Prisma.FloorPlanLineItemUpdateInput;
        RelationName: "floorPlan";
        ListRelations: never;
        Relations: {
            floorPlan: {
                Shape: FloorPlan | null;
                Name: "FloorPlan";
            };
        };
    };
    FloorPlanProvider: {
        Name: "FloorPlanProvider";
        Shape: FloorPlanProvider;
        Include: Prisma.FloorPlanProviderInclude;
        Select: Prisma.FloorPlanProviderSelect;
        OrderBy: Prisma.FloorPlanProviderOrderByWithRelationInput;
        WhereUnique: Prisma.FloorPlanProviderWhereUniqueInput;
        Where: Prisma.FloorPlanProviderWhereInput;
        Create: Prisma.FloorPlanProviderCreateInput;
        Update: Prisma.FloorPlanProviderUpdateInput;
        RelationName: "dealershipFloorPlans" | "floorPlans";
        ListRelations: "dealershipFloorPlans" | "floorPlans";
        Relations: {
            dealershipFloorPlans: {
                Shape: DealershipFloorPlan[];
                Name: "DealershipFloorPlan";
            };
            floorPlans: {
                Shape: FloorPlan[];
                Name: "FloorPlan";
            };
        };
    };
    InAppNotification: {
        Name: "InAppNotification";
        Shape: InAppNotification;
        Include: Prisma.InAppNotificationInclude;
        Select: Prisma.InAppNotificationSelect;
        OrderBy: Prisma.InAppNotificationOrderByWithRelationInput;
        WhereUnique: Prisma.InAppNotificationWhereUniqueInput;
        Where: Prisma.InAppNotificationWhereInput;
        Create: Prisma.InAppNotificationCreateInput;
        Update: Prisma.InAppNotificationUpdateInput;
        RelationName: "notification" | "user";
        ListRelations: never;
        Relations: {
            notification: {
                Shape: Notification | null;
                Name: "Notification";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    Note: {
        Name: "Note";
        Shape: Note;
        Include: Prisma.NoteInclude;
        Select: Prisma.NoteSelect;
        OrderBy: Prisma.NoteOrderByWithRelationInput;
        WhereUnique: Prisma.NoteWhereUniqueInput;
        Where: Prisma.NoteWhereInput;
        Create: Prisma.NoteCreateInput;
        Update: Prisma.NoteUpdateInput;
        RelationName: "deal" | "dealership" | "from" | "vehicle";
        ListRelations: never;
        Relations: {
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            from: {
                Shape: User | null;
                Name: "User";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    Notification: {
        Name: "Notification";
        Shape: Notification;
        Include: Prisma.NotificationInclude;
        Select: Prisma.NotificationSelect;
        OrderBy: Prisma.NotificationOrderByWithRelationInput;
        WhereUnique: Prisma.NotificationWhereUniqueInput;
        Where: Prisma.NotificationWhereInput;
        Create: Prisma.NotificationCreateInput;
        Update: Prisma.NotificationUpdateInput;
        RelationName: "inAppNotifications";
        ListRelations: "inAppNotifications";
        Relations: {
            inAppNotifications: {
                Shape: InAppNotification[];
                Name: "InAppNotification";
            };
        };
    };
    Offer: {
        Name: "Offer";
        Shape: Offer;
        Include: Prisma.OfferInclude;
        Select: Prisma.OfferSelect;
        OrderBy: Prisma.OfferOrderByWithRelationInput;
        WhereUnique: Prisma.OfferWhereUniqueInput;
        Where: Prisma.OfferWhereInput;
        Create: Prisma.OfferCreateInput;
        Update: Prisma.OfferUpdateInput;
        RelationName: "deal";
        ListRelations: never;
        Relations: {
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
        };
    };
    Permission: {
        Name: "Permission";
        Shape: Permission;
        Include: Prisma.PermissionInclude;
        Select: Prisma.PermissionSelect;
        OrderBy: Prisma.PermissionOrderByWithRelationInput;
        WhereUnique: Prisma.PermissionWhereUniqueInput;
        Where: Prisma.PermissionWhereInput;
        Create: Prisma.PermissionCreateInput;
        Update: Prisma.PermissionUpdateInput;
        RelationName: "dealership" | "user";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    PhoneNumber: {
        Name: "PhoneNumber";
        Shape: PhoneNumber;
        Include: Prisma.PhoneNumberInclude;
        Select: Prisma.PhoneNumberSelect;
        OrderBy: Prisma.PhoneNumberOrderByWithRelationInput;
        WhereUnique: Prisma.PhoneNumberWhereUniqueInput;
        Where: Prisma.PhoneNumberWhereInput;
        Create: Prisma.PhoneNumberCreateInput;
        Update: Prisma.PhoneNumberUpdateInput;
        RelationName: "user" | "vendor" | "deals" | "physicalAccess";
        ListRelations: "deals" | "physicalAccess";
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
            vendor: {
                Shape: Vendor | null;
                Name: "Vendor";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
            physicalAccess: {
                Shape: PhysicalAccess[];
                Name: "PhysicalAccess";
            };
        };
    };
    PhysicalAccess: {
        Name: "PhysicalAccess";
        Shape: PhysicalAccess;
        Include: Prisma.PhysicalAccessInclude;
        Select: Prisma.PhysicalAccessSelect;
        OrderBy: Prisma.PhysicalAccessOrderByWithRelationInput;
        WhereUnique: Prisma.PhysicalAccessWhereUniqueInput;
        Where: Prisma.PhysicalAccessWhereInput;
        Create: Prisma.PhysicalAccessCreateInput;
        Update: Prisma.PhysicalAccessUpdateInput;
        RelationName: "user" | "logs" | "phoneNumbers";
        ListRelations: "logs" | "phoneNumbers";
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
            logs: {
                Shape: PhysicalAccessLog[];
                Name: "PhysicalAccessLog";
            };
            phoneNumbers: {
                Shape: PhoneNumber[];
                Name: "PhoneNumber";
            };
        };
    };
    PhysicalAccessLog: {
        Name: "PhysicalAccessLog";
        Shape: PhysicalAccessLog;
        Include: Prisma.PhysicalAccessLogInclude;
        Select: Prisma.PhysicalAccessLogSelect;
        OrderBy: Prisma.PhysicalAccessLogOrderByWithRelationInput;
        WhereUnique: Prisma.PhysicalAccessLogWhereUniqueInput;
        Where: Prisma.PhysicalAccessLogWhereInput;
        Create: Prisma.PhysicalAccessLogCreateInput;
        Update: Prisma.PhysicalAccessLogUpdateInput;
        RelationName: "access";
        ListRelations: never;
        Relations: {
            access: {
                Shape: PhysicalAccess | null;
                Name: "PhysicalAccess";
            };
        };
    };
    PlaidAccount: {
        Name: "PlaidAccount";
        Shape: PlaidAccount;
        Include: Prisma.PlaidAccountInclude;
        Select: Prisma.PlaidAccountSelect;
        OrderBy: Prisma.PlaidAccountOrderByWithRelationInput;
        WhereUnique: Prisma.PlaidAccountWhereUniqueInput;
        Where: Prisma.PlaidAccountWhereInput;
        Create: Prisma.PlaidAccountCreateInput;
        Update: Prisma.PlaidAccountUpdateInput;
        RelationName: "dealership" | "dealerAccount";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership;
                Name: "Dealership";
            };
            dealerAccount: {
                Shape: DealerAccount;
                Name: "DealerAccount";
            };
        };
    };
    SignedDoc: {
        Name: "SignedDoc";
        Shape: SignedDoc;
        Include: Prisma.SignedDocInclude;
        Select: Prisma.SignedDocSelect;
        OrderBy: Prisma.SignedDocOrderByWithRelationInput;
        WhereUnique: Prisma.SignedDocWhereUniqueInput;
        Where: Prisma.SignedDocWhereInput;
        Create: Prisma.SignedDocCreateInput;
        Update: Prisma.SignedDocUpdateInput;
        RelationName: "doc" | "signer";
        ListRelations: never;
        Relations: {
            doc: {
                Shape: Doc | null;
                Name: "Doc";
            };
            signer: {
                Shape: Signer | null;
                Name: "Signer";
            };
        };
    };
    Signer: {
        Name: "Signer";
        Shape: Signer;
        Include: Prisma.SignerInclude;
        Select: Prisma.SignerSelect;
        OrderBy: Prisma.SignerOrderByWithRelationInput;
        WhereUnique: Prisma.SignerWhereUniqueInput;
        Where: Prisma.SignerWhereInput;
        Create: Prisma.SignerCreateInput;
        Update: Prisma.SignerUpdateInput;
        RelationName: "electronicConsent" | "user" | "signatureFiles" | "usedToSign" | "SignerTag" | "deals" | "docs";
        ListRelations: "signatureFiles" | "usedToSign" | "SignerTag" | "deals" | "docs";
        Relations: {
            electronicConsent: {
                Shape: ElectronicSignatureConsent | null;
                Name: "ElectronicSignatureConsent";
            };
            user: {
                Shape: User | null;
                Name: "User";
            };
            signatureFiles: {
                Shape: File[];
                Name: "File";
            };
            usedToSign: {
                Shape: SignedDoc[];
                Name: "SignedDoc";
            };
            SignerTag: {
                Shape: SignerTag[];
                Name: "SignerTag";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
        };
    };
    SignerTag: {
        Name: "SignerTag";
        Shape: SignerTag;
        Include: Prisma.SignerTagInclude;
        Select: Prisma.SignerTagSelect;
        OrderBy: Prisma.SignerTagOrderByWithRelationInput;
        WhereUnique: Prisma.SignerTagWhereUniqueInput;
        Where: Prisma.SignerTagWhereInput;
        Create: Prisma.SignerTagCreateInput;
        Update: Prisma.SignerTagUpdateInput;
        RelationName: "signer";
        ListRelations: never;
        Relations: {
            signer: {
                Shape: Signer | null;
                Name: "Signer";
            };
        };
    };
    SiteBanner: {
        Name: "SiteBanner";
        Shape: SiteBanner;
        Include: Prisma.SiteBannerInclude;
        Select: Prisma.SiteBannerSelect;
        OrderBy: Prisma.SiteBannerOrderByWithRelationInput;
        WhereUnique: Prisma.SiteBannerWhereUniqueInput;
        Where: Prisma.SiteBannerWhereInput;
        Create: Prisma.SiteBannerCreateInput;
        Update: Prisma.SiteBannerUpdateInput;
        RelationName: "dealership";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
        };
    };
    Store: {
        Name: "Store";
        Shape: Store;
        Include: Prisma.StoreInclude;
        Select: Prisma.StoreSelect;
        OrderBy: Prisma.StoreOrderByWithRelationInput;
        WhereUnique: Prisma.StoreWhereUniqueInput;
        Where: Prisma.StoreWhereInput;
        Create: Prisma.StoreCreateInput;
        Update: Prisma.StoreUpdateInput;
        RelationName: "dealership" | "deals" | "actions" | "addOns" | "licensePlates" | "licensePlateLog" | "DealLineItem" | "docs" | "files" | "tasks" | "vehicles" | "vehicleTaxPolicies";
        ListRelations: "deals" | "actions" | "addOns" | "licensePlates" | "licensePlateLog" | "DealLineItem" | "docs" | "files" | "tasks" | "vehicles" | "vehicleTaxPolicies";
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
            actions: {
                Shape: DealAction[];
                Name: "DealAction";
            };
            addOns: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            licensePlates: {
                Shape: DealerLicensePlate[];
                Name: "DealerLicensePlate";
            };
            licensePlateLog: {
                Shape: DealerLicensePlateLog[];
                Name: "DealerLicensePlateLog";
            };
            DealLineItem: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
            files: {
                Shape: File[];
                Name: "File";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            vehicles: {
                Shape: Vehicle[];
                Name: "Vehicle";
            };
            vehicleTaxPolicies: {
                Shape: VehicleTaxPolicy[];
                Name: "VehicleTaxPolicy";
            };
        };
    };
    Task: {
        Name: "Task";
        Shape: Task;
        Include: Prisma.TaskInclude;
        Select: Prisma.TaskSelect;
        OrderBy: Prisma.TaskOrderByWithRelationInput;
        WhereUnique: Prisma.TaskWhereUniqueInput;
        Where: Prisma.TaskWhereInput;
        Create: Prisma.TaskCreateInput;
        Update: Prisma.TaskUpdateInput;
        RelationName: "addOns" | "deal" | "dealership" | "store" | "vehicle" | "lineItems" | "alertIndividualUsers";
        ListRelations: "lineItems" | "alertIndividualUsers";
        Relations: {
            addOns: {
                Shape: DealAddOn | null;
                Name: "DealAddOn";
            };
            deal: {
                Shape: Deal | null;
                Name: "Deal";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            lineItems: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            alertIndividualUsers: {
                Shape: User[];
                Name: "User";
            };
        };
    };
    Trade: {
        Name: "Trade";
        Shape: Trade;
        Include: Prisma.TradeInclude;
        Select: Prisma.TradeSelect;
        OrderBy: Prisma.TradeOrderByWithRelationInput;
        WhereUnique: Prisma.TradeWhereUniqueInput;
        Where: Prisma.TradeWhereInput;
        Create: Prisma.TradeCreateInput;
        Update: Prisma.TradeUpdateInput;
        RelationName: "deals";
        ListRelations: "deals";
        Relations: {
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
        };
    };
    TransactionItem: {
        Name: "TransactionItem";
        Shape: TransactionItem;
        Include: Prisma.TransactionItemInclude;
        Select: Prisma.TransactionItemSelect;
        OrderBy: Prisma.TransactionItemOrderByWithRelationInput;
        WhereUnique: Prisma.TransactionItemWhereUniqueInput;
        Where: Prisma.TransactionItemWhereInput;
        Create: Prisma.TransactionItemCreateInput;
        Update: Prisma.TransactionItemUpdateInput;
        RelationName: "accountTransaction" | "check" | "dealership" | "vendor" | "vehicleRecon";
        ListRelations: never;
        Relations: {
            accountTransaction: {
                Shape: AccountTransaction | null;
                Name: "AccountTransaction";
            };
            check: {
                Shape: AccountCheck | null;
                Name: "AccountCheck";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            vendor: {
                Shape: Vendor | null;
                Name: "Vendor";
            };
            vehicleRecon: {
                Shape: VehicleRecon | null;
                Name: "VehicleRecon";
            };
        };
    };
    TransactionTypeAllowedList: {
        Name: "TransactionTypeAllowedList";
        Shape: TransactionTypeAllowedList;
        Include: Prisma.TransactionTypeAllowedListInclude;
        Select: Prisma.TransactionTypeAllowedListSelect;
        OrderBy: Prisma.TransactionTypeAllowedListOrderByWithRelationInput;
        WhereUnique: Prisma.TransactionTypeAllowedListWhereUniqueInput;
        Where: Prisma.TransactionTypeAllowedListWhereInput;
        Create: Prisma.TransactionTypeAllowedListCreateInput;
        Update: Prisma.TransactionTypeAllowedListUpdateInput;
        RelationName: "dealership";
        ListRelations: never;
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: Prisma.UserCreateInput;
        Update: Prisma.UserUpdateInput;
        RelationName: "driverLicenses" | "worksFor" | "dealership" | "addresses" | "plaidAccounts" | "savedVehicleSearches" | "licensePlateLog" | "DealerLicensePlateUser" | "emailAddresses" | "emailSubscribers" | "files" | "notifications" | "notes" | "permissions" | "phoneNumbers" | "physicalAccess" | "signers" | "notificationSubscriptions" | "VehiclePrice" | "deals" | "devices" | "docs" | "tasks" | "financeApps";
        ListRelations: "driverLicenses" | "addresses" | "plaidAccounts" | "savedVehicleSearches" | "licensePlateLog" | "DealerLicensePlateUser" | "emailAddresses" | "emailSubscribers" | "files" | "notifications" | "notes" | "permissions" | "phoneNumbers" | "physicalAccess" | "signers" | "notificationSubscriptions" | "VehiclePrice" | "deals" | "devices" | "docs" | "tasks" | "financeApps";
        Relations: {
            driverLicenses: {
                Shape: DriverLicense[];
                Name: "DriverLicense";
            };
            worksFor: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            addresses: {
                Shape: Address[];
                Name: "Address";
            };
            plaidAccounts: {
                Shape: CustomerPlaidAccount[];
                Name: "CustomerPlaidAccount";
            };
            savedVehicleSearches: {
                Shape: CustomerVehicleSearch[];
                Name: "CustomerVehicleSearch";
            };
            licensePlateLog: {
                Shape: DealerLicensePlateLog[];
                Name: "DealerLicensePlateLog";
            };
            DealerLicensePlateUser: {
                Shape: DealerLicensePlateUser[];
                Name: "DealerLicensePlateUser";
            };
            emailAddresses: {
                Shape: EmailAddress[];
                Name: "EmailAddress";
            };
            emailSubscribers: {
                Shape: EmailSubscriber[];
                Name: "EmailSubscriber";
            };
            files: {
                Shape: File[];
                Name: "File";
            };
            notifications: {
                Shape: InAppNotification[];
                Name: "InAppNotification";
            };
            notes: {
                Shape: Note[];
                Name: "Note";
            };
            permissions: {
                Shape: Permission[];
                Name: "Permission";
            };
            phoneNumbers: {
                Shape: PhoneNumber[];
                Name: "PhoneNumber";
            };
            physicalAccess: {
                Shape: PhysicalAccess[];
                Name: "PhysicalAccess";
            };
            signers: {
                Shape: Signer[];
                Name: "Signer";
            };
            notificationSubscriptions: {
                Shape: UserNotificationPreference[];
                Name: "UserNotificationPreference";
            };
            VehiclePrice: {
                Shape: VehiclePrice[];
                Name: "VehiclePrice";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
            devices: {
                Shape: Device[];
                Name: "Device";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            financeApps: {
                Shape: DealFinanceApp[];
                Name: "DealFinanceApp";
            };
        };
    };
    UserNotificationPreference: {
        Name: "UserNotificationPreference";
        Shape: UserNotificationPreference;
        Include: Prisma.UserNotificationPreferenceInclude;
        Select: Prisma.UserNotificationPreferenceSelect;
        OrderBy: Prisma.UserNotificationPreferenceOrderByWithRelationInput;
        WhereUnique: Prisma.UserNotificationPreferenceWhereUniqueInput;
        Where: Prisma.UserNotificationPreferenceWhereInput;
        Create: Prisma.UserNotificationPreferenceCreateInput;
        Update: Prisma.UserNotificationPreferenceUpdateInput;
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
        };
    };
    Vehicle: {
        Name: "Vehicle";
        Shape: Vehicle;
        Include: Prisma.VehicleInclude;
        Select: Prisma.VehicleSelect;
        OrderBy: Prisma.VehicleOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleWhereUniqueInput;
        Where: Prisma.VehicleWhereInput;
        Create: Prisma.VehicleCreateInput;
        Update: Prisma.VehicleUpdateInput;
        RelationName: "dealership" | "store" | "vehicleBoughtFrom" | "advertising" | "actions" | "addOns" | "plateLog" | "dealFees" | "docs" | "files" | "notes" | "tasks" | "dates" | "images" | "vehicleOptions" | "prices" | "recon" | "videos" | "deals" | "disclosures" | "floorPlans" | "pricingStats" | "checklist";
        ListRelations: "advertising" | "actions" | "addOns" | "plateLog" | "dealFees" | "docs" | "files" | "notes" | "tasks" | "dates" | "images" | "vehicleOptions" | "prices" | "recon" | "videos" | "deals" | "disclosures" | "floorPlans" | "pricingStats" | "checklist";
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            store: {
                Shape: Store | null;
                Name: "Store";
            };
            vehicleBoughtFrom: {
                Shape: VehicleBoughtFrom | null;
                Name: "VehicleBoughtFrom";
            };
            advertising: {
                Shape: Advertising[];
                Name: "Advertising";
            };
            actions: {
                Shape: DealAction[];
                Name: "DealAction";
            };
            addOns: {
                Shape: DealAddOn[];
                Name: "DealAddOn";
            };
            plateLog: {
                Shape: DealerLicensePlateLog[];
                Name: "DealerLicensePlateLog";
            };
            dealFees: {
                Shape: DealLineItem[];
                Name: "DealLineItem";
            };
            docs: {
                Shape: Doc[];
                Name: "Doc";
            };
            files: {
                Shape: File[];
                Name: "File";
            };
            notes: {
                Shape: Note[];
                Name: "Note";
            };
            tasks: {
                Shape: Task[];
                Name: "Task";
            };
            dates: {
                Shape: VehicleDate[];
                Name: "VehicleDate";
            };
            images: {
                Shape: VehicleImage[];
                Name: "VehicleImage";
            };
            vehicleOptions: {
                Shape: VehicleOption[];
                Name: "VehicleOption";
            };
            prices: {
                Shape: VehiclePrice[];
                Name: "VehiclePrice";
            };
            recon: {
                Shape: VehicleRecon[];
                Name: "VehicleRecon";
            };
            videos: {
                Shape: VehicleVideo[];
                Name: "VehicleVideo";
            };
            deals: {
                Shape: Deal[];
                Name: "Deal";
            };
            disclosures: {
                Shape: Disclosure[];
                Name: "Disclosure";
            };
            floorPlans: {
                Shape: FloorPlan[];
                Name: "FloorPlan";
            };
            pricingStats: {
                Shape: VehiclePricingStat[];
                Name: "VehiclePricingStat";
            };
            checklist: {
                Shape: VehicleChecklist[];
                Name: "VehicleChecklist";
            };
        };
    };
    VehicleChecklist: {
        Name: "VehicleChecklist";
        Shape: VehicleChecklist;
        Include: Prisma.VehicleChecklistInclude;
        Select: Prisma.VehicleChecklistSelect;
        OrderBy: Prisma.VehicleChecklistOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleChecklistWhereUniqueInput;
        Where: Prisma.VehicleChecklistWhereInput;
        Create: Prisma.VehicleChecklistCreateInput;
        Update: Prisma.VehicleChecklistUpdateInput;
        RelationName: "vehicle";
        ListRelations: never;
        Relations: {
            vehicle: {
                Shape: Vehicle;
                Name: "Vehicle";
            };
        };
    };
    VehiclePricingStat: {
        Name: "VehiclePricingStat";
        Shape: VehiclePricingStat;
        Include: Prisma.VehiclePricingStatInclude;
        Select: Prisma.VehiclePricingStatSelect;
        OrderBy: Prisma.VehiclePricingStatOrderByWithRelationInput;
        WhereUnique: Prisma.VehiclePricingStatWhereUniqueInput;
        Where: Prisma.VehiclePricingStatWhereInput;
        Create: Prisma.VehiclePricingStatCreateInput;
        Update: Prisma.VehiclePricingStatUpdateInput;
        RelationName: "vehicle";
        ListRelations: never;
        Relations: {
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    VehicleBoughtFrom: {
        Name: "VehicleBoughtFrom";
        Shape: VehicleBoughtFrom;
        Include: Prisma.VehicleBoughtFromInclude;
        Select: Prisma.VehicleBoughtFromSelect;
        OrderBy: Prisma.VehicleBoughtFromOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleBoughtFromWhereUniqueInput;
        Where: Prisma.VehicleBoughtFromWhereInput;
        Create: Prisma.VehicleBoughtFromCreateInput;
        Update: Prisma.VehicleBoughtFromUpdateInput;
        RelationName: "address" | "vendor" | "vehicle";
        ListRelations: never;
        Relations: {
            address: {
                Shape: Address | null;
                Name: "Address";
            };
            vendor: {
                Shape: Vendor | null;
                Name: "Vendor";
            };
            vehicle: {
                Shape: Vehicle;
                Name: "Vehicle";
            };
        };
    };
    VehicleDate: {
        Name: "VehicleDate";
        Shape: VehicleDate;
        Include: Prisma.VehicleDateInclude;
        Select: Prisma.VehicleDateSelect;
        OrderBy: Prisma.VehicleDateOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleDateWhereUniqueInput;
        Where: Prisma.VehicleDateWhereInput;
        Create: Prisma.VehicleDateCreateInput;
        Update: Prisma.VehicleDateUpdateInput;
        RelationName: "vehicle";
        ListRelations: never;
        Relations: {
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    VehicleHistoryReport: {
        Name: "VehicleHistoryReport";
        Shape: VehicleHistoryReport;
        Include: never;
        Select: Prisma.VehicleHistoryReportSelect;
        OrderBy: Prisma.VehicleHistoryReportOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleHistoryReportWhereUniqueInput;
        Where: Prisma.VehicleHistoryReportWhereInput;
        Create: Prisma.VehicleHistoryReportCreateInput;
        Update: Prisma.VehicleHistoryReportUpdateInput;
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    VehicleImage: {
        Name: "VehicleImage";
        Shape: VehicleImage;
        Include: Prisma.VehicleImageInclude;
        Select: Prisma.VehicleImageSelect;
        OrderBy: Prisma.VehicleImageOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleImageWhereUniqueInput;
        Where: Prisma.VehicleImageWhereInput;
        Create: Prisma.VehicleImageCreateInput;
        Update: Prisma.VehicleImageUpdateInput;
        RelationName: "vehicle" | "tags";
        ListRelations: "tags";
        Relations: {
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            tags: {
                Shape: VehicleImageTag[];
                Name: "VehicleImageTag";
            };
        };
    };
    VehicleImageTag: {
        Name: "VehicleImageTag";
        Shape: VehicleImageTag;
        Include: Prisma.VehicleImageTagInclude;
        Select: Prisma.VehicleImageTagSelect;
        OrderBy: Prisma.VehicleImageTagOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleImageTagWhereUniqueInput;
        Where: Prisma.VehicleImageTagWhereInput;
        Create: Prisma.VehicleImageTagCreateInput;
        Update: Prisma.VehicleImageTagUpdateInput;
        RelationName: "image";
        ListRelations: never;
        Relations: {
            image: {
                Shape: VehicleImage | null;
                Name: "VehicleImage";
            };
        };
    };
    VehicleOption: {
        Name: "VehicleOption";
        Shape: VehicleOption;
        Include: Prisma.VehicleOptionInclude;
        Select: Prisma.VehicleOptionSelect;
        OrderBy: Prisma.VehicleOptionOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleOptionWhereUniqueInput;
        Where: Prisma.VehicleOptionWhereInput;
        Create: Prisma.VehicleOptionCreateInput;
        Update: Prisma.VehicleOptionUpdateInput;
        RelationName: "vehicle" | "vehicleOptionTags";
        ListRelations: "vehicleOptionTags";
        Relations: {
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            vehicleOptionTags: {
                Shape: VehicleOptionTag[];
                Name: "VehicleOptionTag";
            };
        };
    };
    VehicleOptionTag: {
        Name: "VehicleOptionTag";
        Shape: VehicleOptionTag;
        Include: Prisma.VehicleOptionTagInclude;
        Select: Prisma.VehicleOptionTagSelect;
        OrderBy: Prisma.VehicleOptionTagOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleOptionTagWhereUniqueInput;
        Where: Prisma.VehicleOptionTagWhereInput;
        Create: Prisma.VehicleOptionTagCreateInput;
        Update: Prisma.VehicleOptionTagUpdateInput;
        RelationName: "vehicleOption";
        ListRelations: never;
        Relations: {
            vehicleOption: {
                Shape: VehicleOption | null;
                Name: "VehicleOption";
            };
        };
    };
    VehiclePrice: {
        Name: "VehiclePrice";
        Shape: VehiclePrice;
        Include: Prisma.VehiclePriceInclude;
        Select: Prisma.VehiclePriceSelect;
        OrderBy: Prisma.VehiclePriceOrderByWithRelationInput;
        WhereUnique: Prisma.VehiclePriceWhereUniqueInput;
        Where: Prisma.VehiclePriceWhereInput;
        Create: Prisma.VehiclePriceCreateInput;
        Update: Prisma.VehiclePriceUpdateInput;
        RelationName: "user" | "vehicle";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User | null;
                Name: "User";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    VehicleRecon: {
        Name: "VehicleRecon";
        Shape: VehicleRecon;
        Include: Prisma.VehicleReconInclude;
        Select: Prisma.VehicleReconSelect;
        OrderBy: Prisma.VehicleReconOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleReconWhereUniqueInput;
        Where: Prisma.VehicleReconWhereInput;
        Create: Prisma.VehicleReconCreateInput;
        Update: Prisma.VehicleReconUpdateInput;
        RelationName: "bankLink" | "vehicle" | "vendor";
        ListRelations: never;
        Relations: {
            bankLink: {
                Shape: TransactionItem | null;
                Name: "TransactionItem";
            };
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
            vendor: {
                Shape: Vendor | null;
                Name: "Vendor";
            };
        };
    };
    VehicleTaxPolicy: {
        Name: "VehicleTaxPolicy";
        Shape: VehicleTaxPolicy;
        Include: Prisma.VehicleTaxPolicyInclude;
        Select: Prisma.VehicleTaxPolicySelect;
        OrderBy: Prisma.VehicleTaxPolicyOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleTaxPolicyWhereUniqueInput;
        Where: Prisma.VehicleTaxPolicyWhereInput;
        Create: Prisma.VehicleTaxPolicyCreateInput;
        Update: Prisma.VehicleTaxPolicyUpdateInput;
        RelationName: "store";
        ListRelations: never;
        Relations: {
            store: {
                Shape: Store | null;
                Name: "Store";
            };
        };
    };
    VehicleVideo: {
        Name: "VehicleVideo";
        Shape: VehicleVideo;
        Include: Prisma.VehicleVideoInclude;
        Select: Prisma.VehicleVideoSelect;
        OrderBy: Prisma.VehicleVideoOrderByWithRelationInput;
        WhereUnique: Prisma.VehicleVideoWhereUniqueInput;
        Where: Prisma.VehicleVideoWhereInput;
        Create: Prisma.VehicleVideoCreateInput;
        Update: Prisma.VehicleVideoUpdateInput;
        RelationName: "vehicle";
        ListRelations: never;
        Relations: {
            vehicle: {
                Shape: Vehicle | null;
                Name: "Vehicle";
            };
        };
    };
    Vendor: {
        Name: "Vendor";
        Shape: Vendor;
        Include: Prisma.VendorInclude;
        Select: Prisma.VendorSelect;
        OrderBy: Prisma.VendorOrderByWithRelationInput;
        WhereUnique: Prisma.VendorWhereUniqueInput;
        Where: Prisma.VendorWhereInput;
        Create: Prisma.VendorCreateInput;
        Update: Prisma.VendorUpdateInput;
        RelationName: "dealership" | "addresses" | "bridgeToAccountTransactions" | "phoneNumbers" | "transactions" | "VehicleBoughtFrom" | "recon";
        ListRelations: "addresses" | "bridgeToAccountTransactions" | "phoneNumbers" | "transactions" | "VehicleBoughtFrom" | "recon";
        Relations: {
            dealership: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
            addresses: {
                Shape: Address[];
                Name: "Address";
            };
            bridgeToAccountTransactions: {
                Shape: BridgeAccountTransactionToTransactionItem[];
                Name: "BridgeAccountTransactionToTransactionItem";
            };
            phoneNumbers: {
                Shape: PhoneNumber[];
                Name: "PhoneNumber";
            };
            transactions: {
                Shape: TransactionItem[];
                Name: "TransactionItem";
            };
            VehicleBoughtFrom: {
                Shape: VehicleBoughtFrom[];
                Name: "VehicleBoughtFrom";
            };
            recon: {
                Shape: VehicleRecon[];
                Name: "VehicleRecon";
            };
        };
    };
    WebUpdate: {
        Name: "WebUpdate";
        Shape: WebUpdate;
        Include: Prisma.WebUpdateInclude;
        Select: Prisma.WebUpdateSelect;
        OrderBy: Prisma.WebUpdateOrderByWithRelationInput;
        WhereUnique: Prisma.WebUpdateWhereUniqueInput;
        Where: Prisma.WebUpdateWhereInput;
        Create: Prisma.WebUpdateCreateInput;
        Update: Prisma.WebUpdateUpdateInput;
        RelationName: "dealer";
        ListRelations: never;
        Relations: {
            dealer: {
                Shape: Dealership | null;
                Name: "Dealership";
            };
        };
    };
}
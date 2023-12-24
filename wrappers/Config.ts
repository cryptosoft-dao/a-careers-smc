/*
const int error:unauthorized = 401;
const int error::invalid_category = 402;
const int error::invalid_content = 403;
const int error::not_enough_ton = 404;
const int error::already_revoked = 406;

;; --------------- Order ---------------
const int error::invalid_status = 500;


;; --------------- Master ---------------
const int error::invalid_parts = 701;
const int error::category_already_exist = 702;
const int error::category_not_exist = 703;
const int error::deletion_not_allowed = 704;
const int error::category_already_active = 705;
const int error::category_already_inactive = 706;


;; --------------- Admin ---------------

;; --------------- User ---------------

const int error::not_freelancer = 600;
const int error::already_responsed = 601;
const int error::too_many_responsed = 602;
 */

export const OPCODES = {
    ACTIVATE_ORDER: 1,
    ADD_RESPONSE: 2,
    ASSIGN_USER: 3,
    ACCEPT_ORDER: 30,
    REJECT_ORDER: 31,
    CANCEL_ASSIGN: 32,
    COMPLETE_ORDER: 4,
    CUSTOMER_FEEDBACK: 5,
    PROCESS_ARBITRATION: 6,
    SET_ADMINS: 17,
    ORDER_COMPLETED: 20,
    ORDER_COMPLETED_NOTIFICATION: 21,

    ACTIVATE_ORDER_MASTER: 7,
    ADD_RESPONSE_MASTER: 8,
    PROCESS_ARBITRATION_MASTER: 9,
    CREATE_ORDER_MASTER: 11,
    GET_ADMINS: 16,
    CREATE_ADMIN_MASTER: 18,
    CREATE_ADMIN: 38,
    ORDER_ACTIVATE_NOTIFICATION: 19,
    REVOKE_ADMIN_MASTER: 22,
    REVOKE_USER_MASTER: 23,
    ADMIN_REVOKED_NOTIFICATION: 26,
    ACTIVATE_USER_MASTER: 27,
    ORDER_FEE: 33,
    CREATE_CATEGORY: 34,
    DELETE_CATEGORY: 35,
    ACTIVATE_CATEGORY: 36,
    DEACTIVATE_CATEGORY: 37,
    CREATE_USER: 39,

    CREATE_ORDER: 10,
    REVOKE_USER: 24,
    ACTIVATE_USER: 28,
    ADD_RESPONSE_USER: 29,

    ACTIVATE_ORDER_ADMIN: 12,
    ACTIVATE_USER_ADMIN: 13,
    PROCESS_ARBITRATION_ADMIN: 14,
    REVOKE_ADMIN: 25,
};

export const ERRORS = {
    UNAUTHORIZED: 401,
    INVALID_CATEGORY: 402,
    INVALID_CONTENT: 403,
    NOT_ENOUGH_TON: 404,
    ALREADY_REVOKED: 406,

    INVALID_STATUS: 500,
    FREELANCER_NOT_FOUND: 501,

    INVALID_PARTS: 701,
    CATEGORY_ALREADY_EXIST: 702,
    CATEGORY_NOT_EXIST: 703,
    DELETION_NOT_ALLOWED: 704,
    CATEGORY_ALREADY_ACTIVE: 705,
    CATEGORY_ALREADY_INACTIVE: 706,

    NOT_FREELANCER: 600,
    ALREADY_RESPONSED: 601,
    TOO_MANY_RESPONSED: 602,
};

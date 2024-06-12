export type LegalDataType = {
    inn: string;
    kpp: string;
    ogrn: string;
    legal_entity_name: string;
    tax_system: string;
    legal_address: string;
    actual_address: string;
    nds: string;
    bic: string;
    bank: string;
    correspondent_account: string;
    payment_account: string;
    telephone: string;
    email: string;
    fio: string;
    post: string;
    action_basis: string;
}

export type LegalPersonType = {
    post: string;
    fio: string;
    telephone: string;
    email: string;
}

export type EdoDataType = {
    inn: string;
    telephone: string;
    email: string;
    fio: string;
} 
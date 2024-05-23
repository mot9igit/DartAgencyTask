export type CompanyType = {
    id: number,
    title: string,
    image: string,
    opportunities: OpportunityCardType[],
}

export type OpportunityCardType = {
    id: number,
    title: string,
    text: string
}
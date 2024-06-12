export type CompanyType = {
	value: string;
	data: {
		kpp: string | undefined;
		bic: string | undefined;
		swift: string | undefined;
		correspondent_account: string | undefined;
		management: {
			name: string;
		};
		state: {
			status: string;
			code: string;
			actuality_date: number;
			registration_date: number;
			liquidation_date: number;
		};
		opf: {
			type: string;
			code: string;
			full: string;
			short: string;
		};
		name: {
			full_with_opf: string;
			short_with_opf: string;
			latin: string;
			full: string;
			short: string;
		};
		inn: string | undefined;
		ogrn: string | undefined;
		okpo: string;
		okato: string;
		oktmo: string;
		okogu: string;
		okfs: string;
		okved: string;
		okveds: string;
		authorities: string;
		documents: string;
		licenses: string;
		finance: string;
		address: {
			value: string;
			unrestricted_value: string;
			invalidity: string;
			data: {
				postal_code: string;
				country: string;
				country_iso_code: string;
				federal_district: string;
				region_with_type: string;
				region_type: string;
				region_type_full: string;
				region: string;
				city: string;
				street: string;
				house: string;
				fias_level: string;
				kladr_id: string;
				geoname_id: string;
				capital_marker: string;
				okato: string;
				oktmo: string;
				tax_office: string;
				tax_office_legal: string;
				timezone: string;
				geo_lat: string;
				geo_lon: string;
				beltway_hit: string;
				source: string;
			};
		};
		phones: string[];
		emails: string[];
		ogrn_date: number;
		okved_type: string;
		employee_count: number;
	};
};

export enum SearchCompanyEnum {
	INN = "ИНН",
	BIC = "БИК",
}
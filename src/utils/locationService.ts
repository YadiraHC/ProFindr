// src/utils/locationService.ts

import { StatesAndMunicipalities } from '../types/locationTypes';
import statesAndMunicipalitiesData from '../data/statesAndMunicipalities.json';

const statesAndMunicipalities: StatesAndMunicipalities = statesAndMunicipalitiesData;

export const getStatesAndMunicipalities = () => {
    return statesAndMunicipalities;
};

export const searchMunicipalities = (query: string) => {
    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const normalizedQuery = normalizeText(query);
    const results: { state: string; municipalities: string[] }[] = [];
    for (const state in statesAndMunicipalities) {
        const normalizedState = normalizeText(state);
        if (normalizedState.includes(normalizedQuery)) {
            results.push({ state, municipalities: statesAndMunicipalities[state] });
        } else {
            const municipalities = statesAndMunicipalities[state].filter(municipality =>
                normalizeText(municipality).includes(normalizedQuery)
            );
            if (municipalities.length > 0) {
                results.push({ state, municipalities });
            }
        }
    }
    return results;
};

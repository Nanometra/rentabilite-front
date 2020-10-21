import { Loyer } from './loyer';

export interface Bien {
    id: number;
    nom: string;
    lienUrl: string;
    loyers: Loyer[];
    loyerAnnuelIndique: number;
    prixFAI: number;
    surface: number;
}
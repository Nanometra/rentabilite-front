export interface Bien {
    id: number;
    name: string;
    surface?: number;
    prixFAI: number;
    prixAuMetreCarre?: number; // ça me semble être un champ dérivé?
    prixNotaire?: number;
}
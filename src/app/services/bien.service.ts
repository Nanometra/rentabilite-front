import { Observable, of, Subject } from 'rxjs';
import { Bien } from '../interface/bien';
import { Loyer } from '../interface/loyer';

export class BienService {

bienSubject = new Subject<Bien[]>();

private loyers = [
    {
        id: 1,
        montantHC: 0,
        montantCC: 0,
        charges: 0
    },
    {
        id: 2,
        montantHC: 0,
        montantCC: 0,
        charges: 0
    }
]

    private biens = [
        {
            id: 1,
            nom: "Premier bien",
            lienUrl: "www.google.fr",
            loyers: this.loyers,
            loyerAnnuelIndique: 3000,
            prixFAI: 100000,
            surface: 96
        },
        {
            id: 2,
            nom: "Second bien",
            lienUrl: "www.google.fr",
            loyers: this.loyers,
            loyerAnnuelIndique: 3000,
            prixFAI: 145000,
            surface: 105
        }
    ]

    getLoyers(): Observable<Array<Loyer>> {
        return of(this.loyers);
    }

    getBiens(): Observable<Array<Bien>> {
        return of(this.biens);
    }

    getBienById(id: string): Observable<Bien> {
        const bien = this.biens.find(s => s.id === +id);
        return of(bien);
    }
}
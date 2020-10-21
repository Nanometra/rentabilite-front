import { Observable, of, Subject } from 'rxjs';
import { Bien } from '../interface/bien';

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

    emitBienSubject() {
        this.bienSubject.next(this.biens.slice());
    }

    getBienById(id:number) : Observable<Bien> {
        const bien = this.biens.find(
            (s) => {
                return s.id === +id;
            }
        );
        return of(bien);
    }

    getAllBiens() {
        return this.biens;
    }

}
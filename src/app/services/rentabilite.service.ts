import { Observable, of } from 'rxjs';
import { Bien } from '../interface/bien';
import { Loyer } from '../interface/loyer';

export class RentabiliteService {

    private loyers: Loyer[] = [
        {
            id: 1,
            montantCC: 300
        },
        {
            id: 2,
            montantCC: 300
        }
    ]

    private biens: Bien[] = [
        {
            id: 1,
            name: "Premier bien",
            prixFAI: 100000
        },
        {
            id: 2,
            name: "Second bien",
            prixFAI: 145000
        }
    ];

    getLoyers(): Observable<Array<Loyer>> {
        return of(this.loyers);
    }

    getBiens(): Observable<Array<Bien>> {
        return of(this.biens);
    }

    getRentabiliteById(id: string): Observable<Bien> {
        const bien = this.biens.find(s => s.id === +id);
        return of(bien);
    }

}
export class RentabiliteService {

loyers = [
    {
        id: 1,
        loyer: 300
    },
    {
        id: 2,
        loyer: 300
    }
]

    biens = [
        {
            id: 1,
            name: "Premier bien",
            prixBien: 100000
        },
        {
            id: 2,
            name: "Second bien",
            prixBien: 145000
        }
    ];

    getRentabiliteById(id:number) {
        const bien = this.biens.find(
            (s) => {
                return s.id === id;
            }
        );
        return bien;
    }

}